"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/action/sendEmail";
import Submit from "./submit";
import toast from "react-hot-toast";

export default function Contact() {
    const { ref } = useSectionInView("Contact", 0.5);
    return(
        <motion.section className="text-center leading-8 mb-20" id="contact" ref={ref}
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
        viewport={{once:true}}
        >
          <SectionHeading>Contact</SectionHeading>
    
          <p className="text-gray-700 -mt-6 text-white/80 font-inter font-semibold">
            Please contact me directly at{" "}
            <a className="underline" href="mailto:kershan.arulneswaran@ontariotechu.net">
              kershan.arulneswaran@ontariotechu.net{" "}
            </a>or{" "}
            <a className="underline" href="mailto:kershan.arulneswaran@gmail.com">
              kershan.arulneswaran@gmail.com.
            </a>{" "}
            You can also contact me through this form.
          </p>
    
          <form
            className="mt-10 flex flex-col text-black"
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);
    
              if (error) {
                toast.error(error);
                return;
              }
    
              toast.success("Email sent successfully!");
            }}
          >
          <div className="flex items-center justify-center">
              <input
                className="h-14 px-4 rounded-lg borderBlack bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="Your email"
              />
              <Submit/>
            </div>
            <textarea
              className="h-32 my-3 rounded-lg borderBlack px-4 w-[60%] dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none mx-auto"
              name="message"
              placeholder="Your message"
              required
              maxLength={5000}
            />
          </form>
        </motion.section>
      );
    }