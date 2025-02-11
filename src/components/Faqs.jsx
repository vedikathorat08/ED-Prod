import React, { useState } from "react";

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqsData = [
        {
            question:
                "What is the purpose of the Entrepreneurship Development Cell (EDC) of PVGCOET?",
            answer: "The Entrepreneurship Development Cell (EDC) of PVGCOET is established to foster and promote an entrepreneurial culture among students. Our purpose is to provide resources, guidance, and support to aspiring entrepreneurs, helping them transform their innovative ideas into successful businesses.",
        },
        {
            question:
                "What types of programs and events does the EDC-PVG organize?",
            answer: "The EDC-PVG typically organizes a wide range of programs and events, including entrepreneurship workshops, startup idea pitching competitions, networking sessions with successful entrepreneurs, business plan competitions, hackathons, mentorship programs, and more",
        },
        {
            question:
                "What resources does the EDC-PVG provide to aspiring entrepreneurs?",
            answer: "The EDC-PVg offers a range of resources such as mentorship from experienced entrepreneurs, access to incubation and co-working spaces, guidance on business development, legal and financial aspects of startups, and connections to investors and funding opportunities.",
        },
        {
            question:
                "Do I need to have a fully developed idea to join the EDC-PVG?",
            answer: " No, you don't necessarily need a fully developed idea to join the EDC-PVg. EDC-PVG is designed to help you at every stage of your entrepreneurial journey, from idea generation to business development. Even if you only have a concept, you can benefit from the guidance, mentorship, and resources the EDC provides.",
        },
        {
            question:
                "How can EDC-PVG help me turn my startup idea into a real business?",
            answer: " EDC-PVG provide a supportive ecosystem for budding entrepreneurs. They can help you refine your idea through workshops and feedback sessions, connect you with potential team members or co-founders, provide business model validation, and guide you through the steps of creating a viable business plan.",
        },
    ];

    const toggleFAQ = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div
            name="faqs"
            className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-white"
        >
            <h1 className="text-4xl font-bold mb-10  mt-20 text-[#00FFFF] uppercase text-center">
                FAQs
            </h1>
            {faqsData.map((faq, index) => (
                <div
                    key={index}
                    className="border p-4 mb-4 rounded-lg cursor-pointer transition ease-in-out duration-300 transform hover:shadow-md"
                    onClick={() => toggleFAQ(index)}
                >
                    <h2 className="text-lg font-medium">{faq.question}</h2>
                    <div
                        className={`mt-2 ${
                            activeIndex === index ? "block" : "hidden"
                        }`}
                        style={{
                            maxHeight: activeIndex === index ? "1000px" : "0",
                        }}
                    >
                        <p>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQs;
