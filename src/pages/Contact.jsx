import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Container'
import GradientButton from '../components/GradientButton'

export default function Contact() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <Navbar />
      <section className="pt-24 pb-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Book a Free Strategy Call</h1>
            <p className="mt-3 text-slate-600">Pick a time that works for you — we’ll meet on Zoom and map your automations.</p>
            <div className="mt-8 rounded-2xl border border-slate-200 p-6 bg-[#F8F9FA]">
              <div className="aspect-video w-full bg-white rounded-xl border border-slate-200 flex items-center justify-center text-slate-500">
                Calendly embed will appear here
              </div>
              <div className="mt-6">
                <GradientButton>Book Free Strategy Call</GradientButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  )
}
