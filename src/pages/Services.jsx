import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Container'
import GradientButton from '../components/GradientButton'
import { motion } from 'framer-motion'

const cardBase = 'bg-[#F8F9FA] rounded-2xl shadow-sm border border-slate-200 p-6'

export default function Services() {
  const services = [
    {
      title: 'POPIA-Compliant Cold Email Outreach',
      desc: 'Never hits spam · Personalized + 2 follow-ups · Targets decision-makers',
      bullets: ['8–15% reply rate', '2–5% meeting booking rate', '100% inbox delivery', '50–150 qualified leads/month'],
    },
    {
      title: '24/7 AI Voice Agents',
      desc: 'Human-like, multilingual, books/reschedules instantly',
      bullets: ['Answers 100% of calls', '20–60 bookings/month', '90% fewer missed leads', '10+ languages'],
    },
    {
      title: 'Website AI Chatbots',
      desc: 'Same brain as voice agents, lives on your site',
      bullets: ['98% instant response', '30–50% of chats → booked calls', 'Cuts support tickets 70–90%'],
    },
    {
      title: 'Custom Lead Generation Systems',
      desc: 'Bespoke multi-channel funnels built for your exact business',
      bullets: ['100–400 qualified leads/month', '30–80 meetings/month', '5–15× ROI in 90 days'],
    },
    {
      title: 'SMS/WhatsApp Reminders + Google Reviews',
      desc: 'Auto-reminds & requests 5-star reviews',
      bullets: ['60–85% fewer no-shows', '10–50 new reviews/month', '25–40% more referrals'],
    },
    {
      title: 'Professional Website & App Development',
      desc: 'Stunning, SEO-optimized sites & native apps that connect to all your automations',
      bullets: [],
    },
    {
      title: 'Email Promotion & Re-engagement Systems',
      desc: 'Turns your existing database into repeat revenue',
      bullets: ['25–45% open rates', '5–12% click rates', '15–40% of monthly revenue on autopilot'],
    },
  ]

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <Navbar />
      <section className="pt-24 pb-12">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">AI Automations That Book Calls, Cut Costs & Scale Revenue 24/7</h1>
            <p className="mt-4 text-slate-600">From cold outreach to 24/7 voice agents — everything runs on autopilot</p>
            <div className="mt-6">
              <GradientButton>Book Your Free Strategy Call</GradientButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, idx) => (
              <motion.div key={idx} className={cardBase} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.03 }}>
                <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-1 text-slate-600">{s.desc}</p>
                {s.bullets.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-sm text-slate-700">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="px-2.5 py-1 rounded-full bg-white border border-slate-200 shadow-sm">{b}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-[#0B3D91] text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold">We Can Automate Almost Anything in Your Business</h2>
            <p className="mt-3 text-white/80">Book a 15-minute call and we’ll map out exactly what to automate first (100% free)</p>
            <div className="mt-6">
              <GradientButton>Book Your Free Automation Audit</GradientButton>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  )
}
