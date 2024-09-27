"use client"

import Image from 'next/image';
import Link from "next/link"
import React, { useEffect, useRef } from "react"

export default function About() {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('fade-in-initial');
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // Stop observing once the animation has been triggered
          }
        });
      },
      {
        threshold: 0.1, // Trigger the animation when 10% of the element is visible
      }
    );

    const currentElementsRef = elementsRef.current; // Capture the current reference

    currentElementsRef.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      currentElementsRef.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <section className="poppins-regular pt-2 md:pt-8 lg:pt-8">
      {/* Title at the top */}
      <div className="w-full py-10 fade-in-initial" ref={(el) => elementsRef.current.push(el)}>
        <div className="w-full text-center px-4">
          <h1 className="text-5xl font-bold sm:text-4xl md:text-7xl  relative mb-6 md:mb-14 lg:mb-14 akira-expanded">
            <span className="flex items-center justify-center text-white">
              MEET&nbsp;
              <span className="text-[#E70C17]">US</span>
            </span>
          </h1>
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl poppins-bold relative mb-6 md:mb-14 lg:mb-14 akira-expanded">
            <span className="flex items-center justify-center text-white">
              <span className="text-white"><span className="text-[#E70C17]">N</span>EXTGEN <span className="text-[#E70C17]">I</span>NTELLIGENCE <span className="text-[#E70C17]">C</span>LUB</span>
            </span>
          </h1>
        </div>
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-6 lg:gap-12">
          <Image
            src="/nicteampic.jpg"
            width="550"
            height="350"
            loading="eager"
            alt="What We Do"
            className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:col-span-3 shadow-lg shadow-gray-950 border-b-4 border-black transform transition-transform duration-300 hover:scale-105 fade-in-initial"
            ref={(el) => elementsRef.current.push(el)}
          />
          <div className="space-y-4 lg:col-span-3 fade-in-initial text-white" ref={(el) => elementsRef.current.push(el)}>
            <div className="space-y-2">
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-white">
                Inaugurated on July 18th, 2024, the Next Gen Intelligence Club (NIC) has been Meticulously crafted by the Department of <span className="text-[#E70C17]">CSE-ETECH</span> . Our primary goal is to empower students to enhance their technical prowess with <span className="text-[#E70C17]">Next-Generation Technology</span>
                At NIC, we offer a platform for students to integrate their skills across various domains of Engineering and Technology based on the <span className="text-[#E70C17]">Artificial Intelligence</span>. Our club conducts a wide array of events and activities that emphasize the significance of technical knowledge and highlight <span className="text-[#E70C17]">current trends</span>. These include workshops, seminars, certification drives, knowledge-sharing sessions, and <span className="text-[#E70C17]">symposiums</span>.
                Join us on this exciting journey of learning, exploration, and teamwork. What are you waiting for? Embark on a path to excellence with NIC!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Image Removed, Text Centered */}
      <div className="w-full py-4 md:py-10 lg:py-10 fade-in-initial text-white text-center" ref={(el) => elementsRef.current.push(el)}>
        <div className="container px-4 md:px-6 lg:mx-auto">
          <div className="space-y-4 fade-in-initial" ref={(el) => elementsRef.current.push(el)}>
            <div className="space-y-2">
              <h2 className="akira-expanded text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl py-2">
                ABOUT THE <span className="text-[#E70C17]">DEPARTMENT</span>
              </h2>
              <p className=" mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-white">
                Our department stands out as a hub of innovation and excellence, offering a unique blend of expertise across areas such as <span className="text-[#E70C17]">Artificial Intelligence</span> and <span className="text-[#E70C17]">Machine Learning</span> (AIML), <span className="text-[#E70C17]">Big Data Analytics</span> (BDA), Computer Science and <span className="text-[#E70C17]">Business Systems</span> (CSBS) and <span className="text-[#E70C17]">Cyber Security</span>. Under the visionary leadership of our Head of Department, Dr. P. Chitra, who oversees the CSE E-Tech department, we are uniquely positioned to address the evolving challenges of the digital age. Dr. Chitra&apos;s leadership, combined with the extensive experience of our faculty, fosters a collaborative environment where pioneering research and advanced learning thrive. This unique combination of diverse expertise, innovative research, and a commitment to excellence ensures that our department not only keeps pace with technological advancements but also sets new benchmarks in the academic and research community. The impactful contributions of our faculty and students are regularly showcased at prestigious national and international conferences, further cementing our department&apos;s reputation as a leader in these dynamic fields.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
