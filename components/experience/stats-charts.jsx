"use client"

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from "recharts"

const judgmentsData = [
  { name: "Task 1", value: 12 },
  { name: "Task 2", value: 18 },
  { name: "Task 3", value: 8 },
  { name: "Task 4", value: 15 },
  { name: "Task 5", value: 22 },
  { name: "Task 6", value: 10 },
]

const correctnessData = [
  { name: "Correct", value: 78 },
  { name: "Incorrect", value: 22 },
]

const satisfactionData = [
  { day: "Mon", value: 85 },
  { day: "Tue", value: 72 },
  { day: "Wed", value: 90 },
  { day: "Thu", value: 68 },
  { day: "Fri", value: 88 },
  { day: "Sat", value: 95 },
  { day: "Sun", value: 82 },
]

const COLORS = ["#19c093", "#d9d9d9"]

export default function StatsCharts() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Judgments per Task */}
      <div className="bg-[#f2f2f2] rounded-lg p-4">
        <h3 className="text-xs font-medium text-[#828282] mb-3">Judgments per Task</h3>
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={judgmentsData}>
              <XAxis dataKey="name" tick={{ fontSize: 8 }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Bar dataKey="value" fill="#19c093" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Correct vs Incorrect */}
      <div className="bg-[#f2f2f2] rounded-lg p-4">
        <h3 className="text-xs font-medium text-[#828282] mb-3">Correct vs. Incorrect</h3>
        <div className="h-32 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={correctnessData}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={50}
                dataKey="value"
              >
                {correctnessData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-[#19c093]" />
            <span className="text-[#828282]">Correct</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-[#d9d9d9]" />
            <span className="text-[#828282]">Incorrect</span>
          </div>
        </div>
      </div>

      {/* Client Satisfaction */}
      <div className="bg-[#f2f2f2] rounded-lg p-4">
        <h3 className="text-xs font-medium text-[#828282] mb-3">Client Satisfaction</h3>
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={satisfactionData}>
              <XAxis dataKey="day" tick={{ fontSize: 8 }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#19c093" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
