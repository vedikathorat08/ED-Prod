import React from "react";
import Achievement from "../components/Achivement";
import achievementImage from "../assests/nec.jpeg";
import venturers from "../assests/bgimg.jpg"
import Picture10 from "../assests/Venturers23/Picture10.jpg"
import Picture2 from "../assests/Venturers23/Picture2.jpg"
import Picture3 from "../assests/Venturers23/Picture3.jpg"
import Picture4 from "../assests/Venturers23/Picture4.jpg"
import Picture5 from "../assests/Venturers23/Picture5.jpg"
import Picture6 from "../assests/Venturers23/Picture6.jpg"
import Picture7 from "../assests/Venturers23/Picture7.jpg"
import Picture11 from "../assests/Venturers23/Picture11.jpg"
import Picture9 from "../assests/Venturers23/Picture9.jpg"

const AchievementsPage = () => {

    return (
        <div name="achievements" className="container mx-auto  px-4 text-center ">
            <h1 className="  mb-10 text-4xl  text-[#00FFFF] uppercase  font-bold">Achievements</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                <Achievement
                    image={achievementImage}
                    description="A dedicated team of ED-Cell PVG showcased a remarkable performance at NEC by IIT Bombay, securing an impressive rank 17 and advancing to the semi-finals. This remarkable achievement marked a significant milestone as they became the first college from Pune to reach such a prestigious position in the NEC 2023."
                />
                <Achievement
                    image={venturers}
                    description="Venturers 2022, led by ED-Cell PVGCOET, was a two-day event that showcased remarkable event planning, attracting a significant audience. It provided a platform for interaction among industry leaders, experts, established and emerging entrepreneurs, academics, and students. The event's flawless execution featured a variety of activities, highlighting their expertise in nurturing entrepreneurship and innovation within a vibrant community setting."
                />
            </div>
            <h3 className="  mb-10 mt-10 text-3xl  text-[#fd38cd] uppercase  font-bold">Venturers 2023</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                <Achievement
                    title="INTRODUCTION"
                    image={Picture10}
                    description="Venturers 2023, organized by Entrepreneurship Development Cell of Pune Vidyarthi Griha College of Engineering and Technology and GKPIOM Pune unfolded on the 5th and 6th of October 2023, marking a spectacular two-day event that celebrated the spirit of innovation and entrepreneurship. The success of the event was made possible through the unwavering support of Chairman Mr. Sunil Redekar, Director Prof. R.G. Kaduskar, and Principal Dr. Manoj Tarambale. The planning and execution of this successful event were assisted by Faculty Coordinator Dr. N.G. Jaiswal, and the dynamic leadership of General Secretary Swaroop Bharaskar and Joint General Secretary Sharvari Karhe."
                />
                <Achievement
                    title="NETWORKING SESSION"
                    image={Picture2}
                    description="This session provided a valuable platform for students to connect with the guests and gain insights into the world of entrepreneurship. The session also included interactions with faculty members Dr. P.G. Shete from E&TC Department and Dr. Sunil Gaikwad from Electrical Department, further enriching the experience. A total of 75 students participated in this engaging session."
                />
                <Achievement
                    title="SPEAKER SESSION"
                    image={Picture3}
                    description="Dr. Utgikar's talk was really eye-opening. He showed us how India has made significant progress in the Global Innovation Index, moving up from the 81st spot in 2015 to a highly competitive 40th position. This achievement clearly underlines India's commitment to nurturing innovation on a global scale."
                />
                <Achievement
                    title="INTERVIEW SESSION"
                    image={Picture4}
                    description="The third event of Venturers 2023 was the Interview Session. Rakhi Pal, Co-founder of EventBeep and a notable participant in Shark Tank India, graced the event as a guest speaker, sharing her remarkable journey that began with a simple desire to address a problem and culminated in the establishment of a highly successful venture. Her story served as a profound source of inspiration for the audience, showcasing the incredible transformative power of entrepreneurship."
                />
                <Achievement
                    title="SHARK TANK"
                    image={Picture5}
                    description="The second day of Venturers 2023 commenced with the highly anticipated sub-event known as Shark Tank. This session provided a platform for budding entrepreneurs to present their innovative startup ideas and receive valuable feedback from esteemed industry experts who served as the sharks.The panel of distinguished sharks included:
1.	Mahesh Kulkarni - A former CFO, Angel Investor, Startup Mentor, and Financial Advisor.
2.	 Amol Mujumdar - A Senior Consultant at Incedo Inc., a passionate Startup Enthusiast, Product Leader, and Founder of MuCorp Consulting, who is also an Investor."
                />
                <Achievement
                    title="TREASURE HUNT"
                    image={Picture6}
                    description="The treasure hunt was not a run-of-the-mill event; it was a dynamic experience that led students on a quest filled with thrilling challenges and mind-bending clues. Participants were tested on their knowledge of Marvel Cinematic Universe, famous web series, movies, songs, sports, anime, and tech realated knowledge, with each theme offering a unique set of sub-themes to explore. The students displayed remarkable teamwork as they unraveled the clues and solved the riddles, making the hunt not just a competition but also a journey of discovery and adventure"
                />
                <Achievement
                    title="CRIC AUCTION"
                    image={Picture7}
                    description="Another fun event organized by ED-Cell was ‘Cric-Auction’ at the T&P Hall on the second day of the event. This sub-event featured ten enthusiastic teams, each team comprising 4 students, eager to showcase their bidding skills. These teams represented students from diverse academic backgrounds who were keen to exhibit their cricketing prowess. The T and P Hall was alive with energy as players, team owners, and cricket enthusiasts converged to witness the auction."
                />
                <Achievement
                    title="SPEAKER SESSION"
                    image={Picture11}
                    description="In his concise yet highly informative talk, Mr. Advani skillfully dismantled the common misconceptions that often shroud the world of startups. His objective was clear: to provide attendees with a more grounded and realistic understanding of the entrepreneurial landscape. This was achieved by debunking myths and unraveling truths, thus equipping aspiring entrepreneurs with the knowledge and perspective necessary for navigating the complex terrain of entrepreneurship"
                />
                <Achievement
                    title="INTERNSHIP NEXUS"
                    image={Picture9}
                    description="The Internship Nexus event started early on 2nd October and is still ongoing. It facilitated a fruitful connection between our talented college students and established startups seeking interns. Impressively, ED-Cell PVGCOET reached out to over 80 companies, resulting in participation from 17 companies, one hiring not only interns for their organization but also for five other companies under their umbrella, bringing the total participating companies to 21. This exceptional turnout led to internships in diverse domains, including software development, web development, IoT, data science, sales, marketing, business development, digital marketing, management, and core areas like electrical and mechanical, such as EV, HEV, and battery manufacturing"
                />
            </div>
        </div>
    );
};

export default AchievementsPage;
