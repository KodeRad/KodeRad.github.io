// src/components/Testimonials

import React from 'react';
import { TerminalIcon, UsersIcon } from '@heroicons/react/solid';
import { testimonials } from '../data/data';

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="inline-block w-10 mb-4" />
        <h1 className="mb-12 text-3xl font-medium text-white sm:text-4xl title-font">
          Client Testimonials
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full p-4 md:w-1/2">
              <div className="h-full p-8 bg-gray-800 rounded bg-opacity-40">
                <TerminalIcon className="block w-8 mb-4 text-gray-500" />
                <p className="mb-6 leading-relaxed">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="flex-shrink-0 object-cover object-center w-12 rounded-full"
                  />
                  <span className="flex flex-col flex-grow pl-4">
                    <span className="font-medium text-white title-font">
                      {testimonial.name}
                    </span>
                    <span className="text-sm text-gray-500 uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
