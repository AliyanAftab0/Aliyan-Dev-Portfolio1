"use client";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AnimatedSection from "./AnimatedSection";
import Thanks from "./Thanks";

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("xwpebopd");
  const router = useRouter();
  if (state.succeeded) {
    return <Thanks />;
  }

  if (state.succeeded) {
    router.push("/thanks");
  }
  return (
    <>
      <div className="pacifico-regular mx-5 max-sm:h-[56rem] h-[50rem]">
        <AnimatedSection className="flex justify-center items-center text-center my-8">
          <h1 className="text-3xl pacifico-regular text-cyan-700 dark:text-cyan-400">
            Contact Us
          </h1>
        </AnimatedSection>
        <hr className="bg-slate-200 my-2 mx-1 h-[2px]" />
        <div
          id="contact"
          className="md:flex md:justify-between md:items-center md:mx-36 my-32 max-md:flex-col"
        >
          <AnimatedSection>
            <h1 className="text-3xl text-cyan-800 dark:text-cyan-400 pacifico-regular shadow-inner shadow-cyan-300">
              Let's Connect! 💌
            </h1>
            <p className="lg:w-[23rem] py-4 pacifico-regular text-cyan-800 dark:text-cyan-400 shadow-inner shadow-cyan-300">
              If you ever want to grab a coffee/bubble tea{" "}
              <span className="pacifico-regular">(virtually)</span> or just want
              a quick chat - you can find me on social media or you can send me
              a message here!
            </p>
            <span className="flex my-3 gap-5 cursor-pointer">
              <Link href="">
                <Image src={"/Instagram.png"} alt="Instagram" width={32} height={32} />
              </Link>
              <Link href="https://github.com/AliyanAftab0">
                <Image src={"/github.png"} alt="Github" width={32} height={32} />
              </Link>
              <Link href="https://www.linkedin.com/in/aliyan-aftab-b95b962b4/">
                <Image src={"/linkedin.png"} alt="Linkedin" width={32} height={32} />
              </Link>
            </span>
          </AnimatedSection>

          <AnimatedSection className="max-lg:w-[21rem] lg:w-1/2">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="pacifico-regular border-4 border-cyan-600 dark:text-black rounded-lg h-12 w-full my-3 px-3"
                autoComplete="off"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Valid Email"
                className="pacifico-regular border-4 border-cyan-600 dark:text-black rounded-lg h-12 w-full my-3 px-3"
                autoComplete="off"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <br />
              <input
                type="text"
                name="subject"
                placeholder="Enter Your Subject"
                className="pacifico-regular border-4 border-cyan-600 dark:text-black rounded-lg h-12 w-full my-3 px-3"
                autoComplete="off"
                required
              />
              <ValidationError
                prefix="Subject"
                field=" Subject"
                errors={state.errors}
              />
              <br />
              <textarea
                name="comment"
                placeholder="Message"
                className="pacifico-regular border-4 border-cyan-600 dark:text-black rounded-lg h-40 w-full my-3 px-3 py-2 block"
                required
                autoComplete="off"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-cyan-700 text-white px-6 pacifico-regular py-2 rounded-lg">
                  Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
};

export default Contact;
