// src/components/Contact.js

import React from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [sendingBtnText, setSendingBtnText] = React.useState('Submit');

    function handleSubmit(e) {
        e.preventDefault();
        setSendingBtnText('Sending...');
        emailjs.send(
            'service_x1jjbdq',
            'template_xkk82pn',
            {
                name: name,
                email: email,
                message: message,
            },
            'untHYxRXxbkiQowOl'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
                setSendingBtnText('Submit');
            })
            .catch((err) => {
                console.error('FAILED...', err);
                alert('Failed to send email.');
                setSendingBtnText('Submit');
            });
    }

    return (
        <section id="contact" className="relative">
            <div className="container flex flex-wrap px-5 py-10 mx-auto sm:flex-nowrap">
                <div
                    className="relative flex items-end justify-start p-10 overflow-hidden bg-gray-900 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{filter: 'opacity(0.7)'}}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963265.1221678215!2d13.635125061583325!3d50.94357005168107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fea7093a0b993%3A0x512bc220fe8b1e03!2sSterowcowa%2020%2C%2054-130%20Wroc%C5%82aw!5e0!3m2!1sen!2spl!4v1734267568816!5m2!1sen!2spl"
                    />
                    {/* todo: check if this works on phone (opacity) opacity-100 hover:opacity-0 make it work only on mobile view, or make this dialog minimized so it does not obscure the vision */}
                    <div className="relative flex flex-wrap justify-center py-6 bg-gray-900 rounded shadow-md">
                        <div className="content-center px-6 m-0 lg:w-3/7">
                            <h2 className="text-xs font-semibold tracking-widest text-white title-font">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                                Wrocław 54-130 <br/>
                                Poland ❤️
                            </p>
                        </div>
                        <div className="px-6 mt-4 mr-3 lg:w-1/2 lg:mt-0">
                            <h2 className="text-xs font-semibold tracking-widest text-white title-font">
                                EMAIL
                            </h2>
                            <a className="leading-relaxed text-indigo-400">
                                konrad.krasocki@gmail.com
                            </a>
                            <h2 className="mt-4 text-xs font-semibold tracking-widest text-white title-font">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">ask me first!</p>
                        </div>
                    </div>
                </div>
                {/* TODO: add validation to this form */}
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    name="contact"
                    className="flex flex-col w-full mt-8 lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
                    <h2 className="mb-1 text-3xl font-medium text-white sm:text-4xl title-font">
                        Hire Me
                    </h2>
                    <p className="mb-5 leading-relaxed">
                        Want to get in touch? Drop me a message below — I'd love to hear from you!
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="text-sm leading-7 text-gray-400">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="text-sm leading-7 text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="text-sm leading-7 text-gray-400">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
                        {sendingBtnText}
                    </button>
                </form>
            </div>
        </section>
    );
}
