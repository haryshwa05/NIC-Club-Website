"use client";

import React from 'react'
import { Eye, Target } from "lucide-react"
import { motion } from "framer-motion"

export default function Vision() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-6xl font-extrabold text-center text-white akira-expanded mb-12"><span className='text-red-600'>Vision</span> & <span className='text-red-600'>Mission</span></h2>
        <div className="flex flex-col gap-8">
          <motion.div
            className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="p-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-600 text-white mb-6 mx-auto">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center akira-expanded">Our <span className='text-[#E70C17]'>Vision</span></h3>
              <p className="text-black mb-4 text-center poppins-regular">
                Our vision is to spearhead the exploration and application of artificial intelligence, driving innovation and setting new standards for excellence. We aim to foster a collaborative environment where creativity and technology intersect to address real-world challenges. Our primary goal is to equip students and professionals with the skills and knowledge necessary to excel in the rapidly evolving technological landscape, emphasizing continuous learning and ethical responsibility.
                At NIC, we work to create a thriving community where ideas grow and innovation thrives. By nurturing talent and fostering a spirit of inquiry, we empower our members to confidently face the challenges of tomorrow with integrity and resilience. Join us in crafting a future defined by bold achievements and transformative impact.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 bg-red-600 rounded-lg shadow-lg overflow-hidden text- "
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="p-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-6 mx-auto">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center akira-expanded text-white">Our <span className='text-black'>Mission</span></h3>
              <p className="mb-4 text-indigo-100 text-center poppins-regular">
                Our mission is to cultivate a vibrant community of passionate learners and innovators committed to advancing the frontiers of artificial intelligence. We are dedicated to creating an environment where collaboration, cutting-edge research, and practical expertise converge to unlock AI&apos;s full potential.
              
                Through ambitious projects, we aim to equip our members with the skills needed to lead and innovate in this rapidly changing field. Our workshops and hands-on experiences are designed to instill a deep understanding of AI technologies, ensuring members can meet the challenges and seize the opportunities of tomorrow.
             
                At NIC, we believe in the power of unity and the relentless pursuit of excellence. We are committed to nurturing a culture where creativity, technical mastery, and ethical responsibility drive transformative change, setting new benchmarks in AI. Join us in our mission to shape the future, innovate boldly, and lead with strength and integrity.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
