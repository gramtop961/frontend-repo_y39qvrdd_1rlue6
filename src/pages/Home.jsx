import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Container'
import GradientButton from '../components/GradientButton'
import { motion } from 'framer-motion'
import { Mail, Phone, Bot, Rocket, Wrench, Globe, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const cardBase = 'bg-[#F8F9FA] rounded-2xl shadow-sm border border-slate-200 p-6'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/60 via-white/80 to-white" />
      </div>
      <Navbar />
      <Container className="relative z-10 pt-16">
        <div className="py-16 text-center">
          <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#007BFF] to-[#00C6FF]">LeadPointAI</div>
          <p className="mt-4 text-lg text-slate-700">AI Automations That Win Clients & Save Time</p>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900">Stop Wasting Hours on Repetitive Tasks</h1>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">We build AI systems that find leads, book appointments, follow up, and close deals — while you sleep.</p>
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <GradientButton>Book a Free Automation Audit</GradientButton>
            <button className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-slate-700 font-semibold border border-slate-200 hover:bg-slate-50 transition">
              See What We Can Automate <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

function WhatWeAutomate() {
  const items = [
    { icon: Mail, title: 'POPIA-Compliant Cold Email Systems' },
    { icon: CheckCircle2, title: 'Appointment Reminders & Review Requests' },
    { icon: Phone, title: '24/7 AI Phone & Website Agents' },
    { icon: Rocket, title: 'Automated Promo Campaigns' },
    { icon: Wrench, title: 'Custom Web Apps & Internal Tools' },
    { icon: Globe, title: 'Websites & Apps That Convert' },
  ]
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-3xl font-bold text-slate-900 text-center">What We Automate</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className={cardBase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#007BFF]/10 to-[#00C6FF]/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-[#007BFF]" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
              <a href="#" className="mt-3 inline-flex items-center gap-1 text-[#007BFF] hover:text-[#005fcc] font-medium">Learn More <ArrowRight className="w-4 h-4" /></a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Compliance() {
  const items = [
    { icon: ShieldCheck, label: 'POPIA Compliant' },
    { icon: ShieldCheck, label: 'GDPR Ready' },
    { icon: ShieldCheck, label: 'Spam-Proof Delivery' },
  ]
  return (
    <section className="py-10">
      <Container>
        <div className="grid sm:grid-cols-3 gap-4 items-center">
          {items.map((i, idx) => (
            <div key={idx} className="flex items-center justify-center gap-3">
              <i.icon className="w-5 h-5 text-[#007BFF]" />
              <span className="text-slate-700 font-medium">{i.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { title: 'You Tell Us the Goal' },
    { title: 'We Build & Test' },
    { title: 'It Runs 24/7' },
  ]
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-3xl font-bold text-slate-900 text-center">How It Works</h2>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <motion.div key={idx} className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#007BFF]/10 to-[#00C6FF]/10 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7 text-[#007BFF]" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <GradientButton>Get Your Free Audit</GradientButton>
        </div>
      </Container>
    </section>
  )
}

function FAQ() {
  const faqs = [
    'Is this really POPIA compliant?',
    'Will my emails go to spam?',
    'Can you integrate with my CRM?',
    'What if I don’t know what to automate?',
    'Can you really build the back-end and front-end for my company?'
  ]
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-3xl font-bold text-slate-900 text-center">FAQ</h2>
        <div className="mt-8 max-w-3xl mx-auto">
          {faqs.map((q, idx) => (
            <details key={idx} className="group border-b border-slate-200 py-4">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-medium text-slate-900">{q}</span>
                <span className="text-[#007BFF]">+</span>
              </summary>
              <p className="mt-2 text-slate-600">We implement best practices and tailor solutions to your tools and workflow.</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}

function FinalCTA() {
  return (
    <section id="contact" className="py-20 bg-[#F8F9FA]">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Ready to Automate Your Business?</h2>
          <p className="mt-4 text-slate-600">Book a 15-minute automation audit and discover how much time and money you could be saving.</p>
          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-8 text-slate-500">
            Calendly integration will appear here
          </div>
          <div className="mt-8">
            <GradientButton size="xl">Schedule Your Free Audit</GradientButton>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <main>
        <WhatWeAutomate />
        <Compliance />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
