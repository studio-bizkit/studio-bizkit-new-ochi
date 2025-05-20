import Image from "next/image";
import { Team1, Team2, Team3, Team4, logo } from "@/public";
import { Marquee } from "@/components";

export default function Team() {
  return (
    <section className="w-full bg-marquee min-h-screen rounded-t-[20px]">
      <div className="w-full bg-marquee z-10 relative rounded-t-[20px] padding-y">
        <Marquee
          title="the team core of"
          className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[25px] xm:pb-[18px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
        />
      </div>
      <div className="w-full bg-marquee flex items-center justify-center pb-[50px]">
        <div className="w-[80%] p-[20px] bg-background rounded-[20px] sm:w-full xm:w-full mb-20">
          <div className="w-full flex flex-col justify-between gap-[40px] py-[10px]">
            {[
              {
                name: "Sivaguru",
                role: "Founder and CEO",
                image: Team1,
                linkedin: "https://www.linkedin.com/in/sivagurux/",
              },
              {
                name: "Rahul Rattan",
                role: "Chief Operating Officer",
                image: Team2,
                linkedin: "https://www.linkedin.com/in/rahul-ratan-5324aa247/",
              },
              {
                name: "Bilal",
                role: "Chief Technology Officer",
                image: Team3,
                linkedin: "http://linkedin.com/in/mhmd-bilal",
              },
              {
                name: "Ashwath B",
                role: "Head of Design",
                image: Team4,
                linkedin: "https://www.linkedin.com/in/ashwath-b-86a96b277/",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="w-full flex flex-col justify-between gap-[20px] py-[10px] mb-[40px]" // Added margin bottom here
              >
                <div className="flex justify-between sm:flex-col xm:flex-col gap-[20px]">
                  <div>
                    <Image
                      src={logo}
                      alt="studio-bizkit-logo"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <Image
                      src={member.image}
                      alt={`${member.name.toLowerCase()}-photo`}
                      width={300}
                      height={300}
                      className="rounded-[10px] grayscale sm:w-full xm:w-full" // Added grayscale here
                    />
                    <p className="paragraph font-NeueMontreal font-normal text-secondry py-[10px]">
                      {member.role}
                    </p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 underline"
                    >
                      View LinkedIn
                    </a>
                  </div>
                </div>
                <div className="flex justify-between items-end sm:flex-col xm:flex-col sm:items-start xm:items-start">
                  <div>
                    <h1 className="heading font-bold font-FoundersGrotesk text-secondry">
                      {member.name.toUpperCase()}
                    </h1>
                  </div>
                  <div>
                    <h1 className="heading font-bold font-FoundersGrotesk text-secondry">
                      {index + 1} / 4
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
