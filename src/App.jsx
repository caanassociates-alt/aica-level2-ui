import React, { useState, useMemo } from 'react';
import { Calendar, MapPin, Search, Clock, Users, CheckCircle, XCircle, AlertCircle, ChevronDown, Star, Award, BookOpen, Video, FileText, DollarSign, Shield } from 'lucide-react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedBatch, setSelectedBatch] = useState(null);

  const batches = [
    {
      id: 'CCL2_20251007_2886',
      batch: 'Batch 10',
      location: 'Mumbai',
      onlineDates: 'Jan 25-26, 2025',
      offlineDates: 'Jan 28-30, 2025',
      price: '₹10,000',
      status: 'open',
      seats: 45,
      daysLeft: 5,
      image: 'L2B10.png',
      recommended: true
    },
    {
      id: 'CCL2_20251117_2126',
      batch: 'Batch 13',
      location: 'Vasai',
      onlineDates: 'Feb 8-9, 2025',
      offlineDates: 'Feb 11-13, 2025',
      price: '₹10,000',
      status: 'open',
      seats: 32,
      daysLeft: 19,
      image: 'L2B13.png'
    },
    {
      id: 'CCL2_20251117_9397',
      batch: 'Batch 14',
      location: 'Bhubaneswar',
      onlineDates: 'Dec 20-21, 2025',
      offlineDates: 'Dec 27-29, 2025',
      price: '₹10,000',
      status: 'closed',
      seats: 0,
      image: 'L2B14.png'
    },
    {
      id: 'CCL2_20251213_7174',
      batch: 'Batch 16',
      location: 'Mangalore',
      onlineDates: 'Jan 10-11, 2026',
      offlineDates: 'Jan 14-16, 2026',
      price: '₹10,000',
      status: 'open',
      seats: 50,
      daysLeft: 380,
      image: 'L2L2B16.png'
    },
    {
      id: 'CCL2_20251213_8726',
      batch: 'Batch 17',
      location: 'Udupi',
      onlineDates: 'Jan 10-11, 2026',
      offlineDates: 'Jan 15-17, 2026',
      price: '₹10,000',
      status: 'open',
      seats: 50,
      daysLeft: 380,
      image: 'L2L2B17.png'
    }
  ];

  const filteredBatches = useMemo(() => {
    let result = batches;
    if (searchTerm) {
      result = result.filter(batch => 
        batch.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        batch.batch.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (filterStatus !== 'all') {
      result = result.filter(batch => batch.status === filterStatus);
    }
    return result.sort((a, b) => {
      if (a.status === 'open' && b.status !== 'open') return -1;
      if (a.status !== 'open' && b.status === 'open') return 1;
      return a.daysLeft - b.daysLeft;
    });
  }, [searchTerm, filterStatus]);

  const faculty = [
    { name: 'CA. Rahul Malkan', title: 'Tax Technology Expert, FCA, DISA', image: '👨‍💼' },
    { name: 'CA. Sohil Jain', title: 'Tech Innovation Lead, Advanced Excelling', image: '👨‍💼' }
  ];

  const curriculum = [
    { title: 'Introduction to AI & ML', duration: '2 hours', type: 'online' },
    { title: 'AI Applications in Accounting', duration: '3 hours', type: 'online' },
    { title: 'Hands-on: Building AI Models', duration: '6 hours', type: 'offline' },
    { title: 'Case Studies & Projects', duration: '4 hours', type: 'offline' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">ICAI Certified Course</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Secure your seat for AICA Level-2
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Unlock AI for Chartered Accountants
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>5 Days Intensive Training</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Hybrid Learning</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>ICAI Certificate</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-8">
        {/* Current Batch Details Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 border-2 border-yellow-400">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Filling Fast
                </span>
                <span className="text-sm text-gray-600">•</span>
                <span className="text-sm font-semibold text-gray-700">Mumbai - Hybrid Batch</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Batch 10</h2>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-indigo-600">₹10,000</div>
              <div className="text-sm text-gray-500">+ GST</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Video className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-gray-700">Online Sessions</span>
              </div>
              <p className="text-gray-900 font-medium">Jan 25-26, 2025</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-semibold text-gray-700">Offline Sessions</span>
              </div>
              <p className="text-gray-900 font-medium">Jan 28-30, 2025</p>
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl">
            Register for this batch
          </button>
          
          <p className="text-center text-sm text-gray-500 mt-3">
            No payment required • Lock your seat now
          </p>
        </div>

        {/* Schedule & Reminders */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Schedule & reminders</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl border-l-4 border-orange-500">
              <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-gray-900">Last date: 15 Jan, 2025</h4>
                  <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full">
                    5 days left
                  </span>
                </div>
                <p className="text-sm text-gray-600">Registration closes soon</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <input type="checkbox" id="google-cal" className="w-5 h-5 text-blue-600 rounded" />
              <label htmlFor="google-cal" className="text-sm text-gray-700">
                Add to Google Calendar
              </label>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <input type="checkbox" id="email-reminder" className="w-5 h-5 text-blue-600 rounded" />
              <label htmlFor="email-reminder" className="text-sm text-gray-700">
                Email weekly reminders
              </label>
            </div>
          </div>
        </div>

        {/* Course Fit Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">Is this course right for you?</h3>
            <button className="text-blue-600 text-sm font-semibold hover:underline">
              Take our quiz
            </button>
          </div>

          <div className="space-y-3">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Quick self-assessment:</p>
                  <p className="text-sm text-gray-600 mt-1">Completed AICA Level-1 or CA Final? ✓</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Who should enroll:</strong> CA members, CA students (post intermediate), 
                and finance professionals looking to leverage AI in accounting workflows, audit automation, 
                and financial analysis.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Prerequisites:</strong> Basic Excel knowledge, Familiarity with accounting 
                software (Tally, SAP), No coding experience required
              </p>
            </div>
          </div>

          <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-all">
            Yes, I want to enroll now
          </button>
        </div>

        {/* Esteemed Faculty */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Esteemed faculty</h3>
          <p className="text-sm text-gray-600 mb-6">
            Learn from the best. Our faculty are top industry and academic experts.
          </p>

          <div className="space-y-4">
            {faculty.map((person, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl">
                  {person.image}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{person.name}</h4>
                  <p className="text-sm text-gray-600">{person.title}</p>
                </div>
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Curriculum & structure</h3>
          <p className="text-sm text-gray-600 mb-6">
            5-day intensive program combining theory and hands-on practice
          </p>

          <div className="space-y-3">
            {curriculum.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  item.type === 'online' ? 'bg-blue-100' : 'bg-purple-100'
                }`}>
                  {item.type === 'online' ? 
                    <Video className={`w-5 h-5 ${item.type === 'online' ? 'text-blue-600' : 'text-purple-600'}`} /> :
                    <BookOpen className={`w-5 h-5 ${item.type === 'online' ? 'text-blue-600' : 'text-purple-600'}`} />
                  }
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.duration} • {item.type}</p>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-xl">
            <p className="text-sm text-blue-900">
              <strong>Final validation:</strong> Complete capstone project to earn your ICAI certification
            </p>
          </div>
        </div>

        {/* Other Batches */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Other batches & locations</h3>
          
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                filterStatus === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All batches
            </button>
            <button
              onClick={() => setFilterStatus('open')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                filterStatus === 'open' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Open
            </button>
            <button
              onClick={() => setFilterStatus('closed')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                filterStatus === 'closed' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Closed
            </button>
          </div>

          <div className="space-y-3">
            {filteredBatches.map((batch) => (
              <div
                key={batch.id}
                className={`p-4 rounded-xl border-2 transition cursor-pointer ${
                  batch.status === 'open'
                    ? 'border-green-300 bg-green-50 hover:border-green-400'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900">{batch.batch} - {batch.location}</h4>
                    <p className="text-sm text-gray-600">{batch.onlineDates} & {batch.offlineDates}</p>
                  </div>
                  {batch.status === 'open' ? (
                    <div className="flex items-center gap-2">
                      {batch.daysLeft <= 10 && (
                        <span className="bg-orange-100 text-orange-800 text-xs font-bold px-2 py-1 rounded">
                          {batch.daysLeft}d left
                        </span>
                      )}
                      <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Open
                      </span>
                    </div>
                  ) : (
                    <span className="bg-gray-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Closed
                    </span>
                  )}
                </div>
                {batch.status === 'open' && (
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-green-200">
                    <span className="text-sm text-gray-600">{batch.seats} seats available</span>
                    <button className="text-blue-600 text-sm font-semibold hover:underline">
                      View details →
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">FAQs & Instant help</h3>
          
          <div className="space-y-3">
            <details className="p-4 bg-gray-50 rounded-xl">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                Is the hybrid format fully online or hybrid? What are attendance requirements?
              </summary>
              <p className="text-sm text-gray-600 mt-2">
                The course has both online (2 days) and offline (3 days) components. Attendance 
                for both parts is mandatory to receive the ICAI certificate.
              </p>
            </details>

            <details className="p-4 bg-gray-50 rounded-xl">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                What if I need to change my batch after registration?
              </summary>
              <p className="text-sm text-gray-600 mt-2">
                Batch changes are allowed up to 7 days before the course starts, subject to 
                availability. Contact ICAI support for assistance.
              </p>
            </details>

            <details className="p-4 bg-gray-50 rounded-xl">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                Payment details & refunds
              </summary>
              <p className="text-sm text-gray-600 mt-2">
                Full payment of ₹10,000 + GST is required at registration. Refunds available 
                if cancelled 14+ days before start date (80% refund). No refund after that period.
              </p>
            </details>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-center text-white mb-8">
          <Award className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Ready to transform your career?</h3>
          <p className="text-blue-100 mb-6">Join 500+ CAs already certified in AI</p>
          <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-lg">
            Secure my seat now
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;