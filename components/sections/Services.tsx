import Service from '../Service'
const services =
    [
        {
            Icon: (
                <svg
                    className="w-8 y-8 text-yellow"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M20 4h-4V2H8v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zM6 10h2v2H6v-2zm0 4h2v2H6v-2zm4-4h8v2h-8v-2zm0 4h8v2h-8v-2z" />
                </svg>
            ),
            title: 'UI/UX Design',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
        },
        {
            Icon: (
                <svg
                    className="w-8 h-8 text-yellow"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M20 4H4v2h16V4zM4 20h16v-2H4v2zm0-7h16v-2H4v2z" />
                </svg>
            ),
            title: 'Brand Identity',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
        },
        {
            Icon: (
                <svg
                    className="w-8 h-8 text-yellow"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 2C6.489 2 2 6.489 2 12s4.489 10 10 10 10-4.489 10-10S17.511 2 12 2zm4.447 14.447L13.41 13.41 10.589 16.23 8.706 14.353 15.293 7.767l1.884 1.884-4.883 4.883 3.529 3.529 1.884-1.884z" />
                </svg>
            ),
            title: 'Web Design',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
        },
        {
            Icon: (
                <svg
                className="w-8 h-8 text-yellow"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 18H7V4h10v16zm-5-1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            ),
            title: 'Mobile Apps',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
        },
        {
            Icon: (
                <svg
                    className="w-8 h-8 text-yellow"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M3 3h2v18H3V3zm4 14h2v4H7v-4zm4-8h2v12h-2V9zm4-4h2v16h-2V5zm4 6h2v10h-2V11z" />
                </svg>
            ),
            title: 'Photography',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
        },
        {
            Icon: (
                <svg
                    className="w-8 h-8 text-yellow"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M3 3h2v18H3V3zm4 14h2v4H7v-4zm4-8h2v12h-2V9zm4-4h2v16h-2V5zm4 6h2v10h-2V11z" />
                </svg>
            ),
            title: 'Photography',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
        },
    ]
const Services = () => {
    return (
        <section className="section bg-gris-section py-10 lg:py-[120px]" id="services">
            <div className="lg:max-w-screen-xl mx-auto px-6">
                <h2 className='text-[28px] font-kaushan font-normal text-title mb-8'>What I Do</h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {services.map(service=>(
                    <Service key={service.title} {...service} />
                   ))}
                </div>
            </div>
        </section>
    )
}

export default Services