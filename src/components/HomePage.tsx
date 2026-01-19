import { Calendar, Clock, Play, Mail, Phone, User } from 'lucide-react';

export function HomePage() {
  // Timeline data for 3 days based on setup process
  const timelineData = [
    {
      day: 'Day 1',
      date: 'Monday, Jan 15',
      events: [
        {
          time: '9:00 AM',
          title: 'Meter Installation Scheduled',
          description: 'Technician will arrive to install your Nielsen meter at 742 Evergreen, North Blvd, Austin, TX'
        },
        {
          time: '2:00 PM',
          title: 'Setup Complete',
          description: 'Your meter is now active and collecting data. Primary contact: Derek Bale'
        }
      ]
    },
    {
      day: 'Day 2',
      date: 'Tuesday, Jan 16',
      events: [
        {
          time: '10:00 AM',
          title: 'Data Collection Started',
          description: 'Meter is recording viewing habits for Derek, Daisy, and Plack'
        }
      ]
    },
    {
      day: 'Day 3',
      date: 'Wednesday, Jan 17',
      events: [
        {
          time: 'All Day',
          title: 'Normal Operation',
          description: 'Continue watching TV as usual - the meter is working automatically. Monitoring 2 TVs (Living Room LG, Master Bedroom Samsung)'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-20">
      {/* Top Navbar */}
      <header className="px-6 py-4 flex items-center justify-between border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="flex items-center gap-3">
          {/* Nielsen Logo Placeholder */}
          <div className="w-32 h-8 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-400 text-sm font-semibold">NIELSEN</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* First Fold - Hero Image */}
        <section className="relative w-full h-64 bg-gradient-to-br from-purple-500 to-blue-600">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <h1 className="text-3xl font-bold mb-2">Welcome to Nielsen</h1>
              <p className="text-lg opacity-90">Your participation helps shape media insights</p>
            </div>
          </div>
          {/* Placeholder for image - you can replace this with an actual image */}
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </section>

        {/* 3-Day Timeline View */}
        <section className="px-6 py-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="text-[#5B4FFF]" size={20} />
                <h2 className="text-xl font-bold text-gray-900">Setup Timeline</h2>
              </div>
              <p className="text-sm text-gray-600">Your 3-day setup process</p>
            </div>

            <div className="p-6">
              <div className="space-y-8">
                {timelineData.map((day, dayIndex) => (
                  <div key={dayIndex} className="relative">
                    {/* Timeline line */}
                    {dayIndex < timelineData.length - 1 && (
                      <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-gray-200"></div>
                    )}
                    
                    <div className="flex gap-4">
                      {/* Day indicator */}
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-[#5B4FFF] flex items-center justify-center text-white font-bold text-sm">
                          {dayIndex + 1}
                        </div>
                      </div>

                      {/* Day content */}
                      <div className="flex-1 pb-8">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{day.day}</h3>
                          <p className="text-sm text-gray-500">{day.date}</p>
                        </div>

                        {/* Events for this day */}
                        <div className="space-y-4">
                          {day.events.map((event, eventIndex) => (
                            <div key={eventIndex} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                              <div className="flex items-start gap-3">
                                <Clock className="text-gray-400 flex-shrink-0 mt-0.5" size={16} />
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-sm font-medium text-gray-900">{event.time}</span>
                                  </div>
                                  <h4 className="font-semibold text-gray-900 mb-1">{event.title}</h4>
                                  <p className="text-sm text-gray-600">{event.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How Meters Work - Video Section */}
        <section className="px-6 py-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">How Meters Work</h2>
              <p className="text-sm text-gray-600 mt-1">Learn how your Nielsen meter collects viewing data</p>
            </div>

            <div className="p-6">
              {/* Video Placeholder */}
              <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="text-white ml-1" size={32} fill="white" />
                    </div>
                    <p className="text-white text-sm">Video Player</p>
                    <p className="text-gray-400 text-xs mt-1">Replace with actual video embed</p>
                  </div>
                </div>
                {/* You can replace this with an actual video element:
                <video className="w-full h-full" controls>
                  <source src="/path-to-video.mp4" type="video/mp4" />
                </video>
                */}
              </div>

              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-700">
                  Your Nielsen meter automatically detects what's playing on your TV and records viewing data securely and anonymously.
                </p>
                <p className="text-sm text-gray-700">
                  No action required from you - just watch TV as you normally would!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Your Nielsen Rep Card */}
        <section className="px-6 py-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">Your Nielsen Representative</h2>
              <p className="text-sm text-gray-600 mt-1">Contact your dedicated support person</p>
            </div>

            <div className="p-6">
              <div className="flex items-start gap-4">
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <User className="text-white" size={32} />
                </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Your Nielsen Representative</h3>
              <p className="text-sm text-gray-600 mb-4">Household ID: 123123 | Primary Contact: Derek Bale</p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Phone className="text-gray-600" size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-medium block">Contact your representative</span>
                    <span className="text-xs text-gray-500">Best time: 5pm - 8pm (Derek)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Mail className="text-gray-600" size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-medium block">Email support</span>
                    <span className="text-xs text-gray-500">Available 24/7</span>
                  </div>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
