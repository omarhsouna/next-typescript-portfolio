"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SubmitHandler, useForm } from "react-hook-form";
import TextField from "../ui/TextField";
import Textarea from "../ui/Textarea";
import Toast from "../ui/Toast";
interface ContactFormInputs {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}
const Contacts = () => {
  const [toastData, setToastData] = useState({
    show: false,
    message: "",
    severity: "success" as "success" | "error",
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({});
  const formRef = useRef<HTMLFormElement>(null);
  const onClose = () =>
    setToastData((toastData) => ({ ...toastData, show: false }));
  const onSubmit: SubmitHandler<ContactFormInputs> = async () => {
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID!,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID!,
        formRef.current!,
        {
          publicKey: process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY,
        }
      );
      reset();
      setToastData({
        show: true,
        message: "Your email has been sent successfully!",
        severity: "success",
      });
    } catch (error) {
      setToastData({
        show: true,
        message: "There was an error while sending your email!",
        severity: "error",
      });
    }
  };
  return (
    <section className="section bg-white py-10 lg:py-[120px]" id="contacts">
      <div className="lg:max-w-screen-xl mx-auto px-6">
        <h2 className="text-[28px] font-kaushan font-normal text-title mb-8">
          Contact Me
        </h2>
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
            <TextField
              {...register("name", { required: "Name is required" })}
              placeholder="Name *"
              error={Boolean(errors.name)}
              helperText={errors.name?.message || ""}
            />
            <TextField
              {...register("phone", { required: "Phone is required" })}
              placeholder="Phone *"
              error={Boolean(errors.phone)}
              helperText={errors.phone?.message || ""}
            />
            <TextField
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email address",
                },
              })}
              placeholder="Email *"
              error={Boolean(errors.email)}
              helperText={errors.email?.message || ""}
            />
            <TextField
              {...register("subject", { required: "Subject is required" })}
              placeholder="Subject *"
              error={Boolean(errors.subject)}
              helperText={errors.subject?.message || ""}
            />
          </div>
          <Textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Message *"
            error={Boolean(errors.message)}
            className="block w-full mt-6"
            helperText={errors.message?.message || ""}
          />
          <button
            type="submit"
            className="max-w-fit uppercase font-medium tracking-widest text-xs hover:shadow-hover-link shadow-active-link text-black duration-300 ease-linear delay-0 mt-8"
          >
            Send Message
          </button>
          <Toast  onClose={onClose} {...toastData} />
        </form>
      </div>
    </section>
  );
};

export default Contacts;
