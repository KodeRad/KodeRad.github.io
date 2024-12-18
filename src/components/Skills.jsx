// src/components/Skills.js

import { BadgeCheckIcon, ChipIcon } from '@heroicons/react/solid';
import React from 'react';
import { skills } from '../data/data';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="mb-20 text-center">
          <ChipIcon className="inline-block w-10 mb-4" />
          <h1 className="mb-4 text-3xl font-medium text-white sm:text-4xl title-font">
            Skills &amp; Technologies
          </h1>
          <p className="mx-auto text-base leading-relaxed xl:w-2/4 lg:w-3/4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2">
          {skills.map((skill) => (
            <div key={skill} className="w-full p-2 sm:w-1/2">
              <div className="flex items-center h-full p-4 bg-gray-800 rounded">
                <BadgeCheckIcon className="flex-shrink-0 w-6 h-6 mr-4 text-green-400" />
                <span className="font-medium text-white title-font">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
