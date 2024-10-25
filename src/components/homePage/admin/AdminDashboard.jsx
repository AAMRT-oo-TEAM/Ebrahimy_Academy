import React, { useState } from "react";

const AdminDashboard = () => {
  const [students, setStudents] = useState([
    {
      name: "علی",
      payments: ["پرداخت ۱", "پرداخت ۲"],
      exercises: [],
      meals: [],
      schedules: [],
    },
    {
      name: "ممد",
      payments: ["پرداخت ۱"],
      exercises: [],
      meals: [],
      schedules: [],
    },
  ]);

  const [exercisesList, setExercisesList] = useState([
    { name: "تمرین ۱", description: "توضیحات تمرین ۱" },
    { name: "تمرین ۲", description: "توضیحات تمرین ۲" },
    { name: "تمرین ۳", description: "توضیحات تمرین ۳" },
  ]);

  const [mealName, setMealName] = useState("");
  const [mealDescription, setMealDescription] = useState("");
  const [scheduleDay, setScheduleDay] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [studentName, setStudentName] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [newExercise, setNewExercise] = useState({
    name: "",
    description: "",
  });

  const addStudent = (e) => {
    e.preventDefault();
    if (studentName.trim()) {
      setStudents([
        ...students,
        {
          name: studentName,
          payments: [],
          exercises: [],
          meals: [],
          schedules: [],
        },
      ]);
      setStudentName("");
    }
  };

  const removeStudent = (name) => {
    setStudents(students.filter((student) => student.name !== name));
    if (selectedStudent && selectedStudent.name === name) {
      setSelectedStudent(null); // Reset selected student when removed
    }
  };

  const assignExercises = (e) => {
    e.preventDefault();
    if (selectedStudent) {
      const updatedStudents = students.map((student) => {
        if (student.name === selectedStudent.name) {
          return {
            ...student,
            exercises: [
              ...new Set([...student.exercises, ...selectedExercises]),
            ],
          };
        }
        return student;
      });
      setStudents(updatedStudents);
      setSelectedExercises([]);
    }
  };

  const addNewExercise = (e) => {
    e.preventDefault();
    if (newExercise.name.trim() && newExercise.description.trim()) {
      const updatedExercisesList = [
        ...exercisesList,
        { name: newExercise.name, description: newExercise.description },
      ];
      setExercisesList(updatedExercisesList);
      setNewExercise({ name: "", description: "" });
    }
  };

  const addMeal = (e) => {
    e.preventDefault();
    if (mealName.trim() && mealDescription.trim() && selectedStudent) {
      const updatedStudents = students.map((student) => {
        if (student.name === selectedStudent.name) {
          return {
            ...student,
            meals: [
              ...student.meals,
              { name: mealName, description: mealDescription },
            ],
          };
        }
        return student;
      });
      setStudents(updatedStudents);
      setMealName("");
      setMealDescription("");
    }
  };

  const addSchedule = (e) => {
    e.preventDefault();
    if (scheduleDay.trim() && scheduleTime.trim() && selectedStudent) {
      const updatedStudents = students.map((student) => {
        if (student.name === selectedStudent.name) {
          return {
            ...student,
            schedules: [
              ...student.schedules,
              { day: scheduleDay, time: scheduleTime },
            ],
          };
        }
        return student;
      });
      setStudents(updatedStudents);
      setScheduleDay("");
      setScheduleTime("");
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-right p-5">
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 top-30 pink__gradient" />
      <header className="bg-gradient-to-r from-[#FF0080] to-[#FF8C00] p-4 text-center rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">پنل ادمین</h1>
        <a href="/" className="text-blue-400 hover:underline mt-2 block">
          برگشت به صفحه اصلی
        </a>
      </header>
      <main className="mt-4 p-6 bg-gray-850 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-white">مدیریت شاگردان</h2>
        <form onSubmit={addStudent} className="space-y-4">
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="نام شاگرد"
            className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#FF0080] to-[#FF8C00] text-white p-3 rounded-md shadow-lg transition duration-300 hover:scale-105"
          >
            اضافه کردن شاگرد
          </button>
        </form>

        <div className="mt-4 text-gray-300">
          <h3 className="text-lg font-semibold">لیست شاگردان</h3>
          <ul className="list-disc list-inside">
            {students.map((student) => (
              <li
                key={student.name}
                onClick={() => setSelectedStudent(student)}
                className={`flex justify-between items-center hover:bg-gray-700 rounded-md p-2 transition duration-300 ${
                  selectedStudent && selectedStudent.name === student.name
                    ? "bg-gray-600"
                    : ""
                }`}
              >
                <span className="cursor-pointer text-blue-400">
                  {student.name}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent click on list item
                    removeStudent(student.name);
                  }}
                  className="ml-4 bg-red-600 hover:bg-red-700 text-white p-1 rounded-md transition duration-300"
                >
                  حذف
                </button>
              </li>
            ))}
          </ul>
        </div>

        {selectedStudent && (
          <div className="mt-8 text-gray-300">
            <h3 className="text-lg font-semibold">
              جزئیات: {selectedStudent.name}
            </h3>
            <h4 className="mt-4 font-semibold">تاریخچه پرداخت</h4>
            <ul className="list-disc list-inside">
              {selectedStudent.payments.map((payment, index) => (
                <li key={index}>{payment}</li>
              ))}
            </ul>
            <h4 className="mt-4 font-semibold">تمرینات</h4>
            <ul className="list-disc list-inside">
              {selectedStudent.exercises.map((exercise, index) => (
                <li key={index}>{exercise}</li>
              ))}
            </ul>
            <h4 className="mt-4 font-semibold">برنامه غذایی</h4>
            <ul className="list-disc list-inside">
              {selectedStudent.meals.map((meal, index) => (
                <li key={index}>
                  {meal.name} - {meal.description}
                </li>
              ))}
            </ul>
            <h4 className="mt-4 font-semibold">برنامه تمرینات</h4>
            <ul className="list-disc list-inside">
              {selectedStudent.schedules.map((schedule, index) => (
                <li key={index}>
                  {schedule.day} - {schedule.time}
                </li>
              ))}
            </ul>

            <form onSubmit={assignExercises} className="space-y-4 mt-4">
              <h4 className="font-semibold">انتخاب تمرینات:</h4>
              {exercisesList.map((exercise) => (
                <div key={exercise.name} className="flex items-center">
                  <input
                    type="checkbox"
                    value={exercise.name}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedExercises([
                          ...selectedExercises,
                          exercise.name,
                        ]);
                      } else {
                        setSelectedExercises(
                          selectedExercises.filter((ex) => ex !== exercise.name)
                        );
                      }
                    }}
                    className="form-checkbox text-[#FF0080] focus:ring-[#FF0080]"
                  />
                  <label className="ml-2 text-white">{exercise.name}</label>
                </div>
              ))}
              <button
                type="submit"
                className="bg-gradient-to-r from-[#FF0080] to-[#FF8C00] text-white p-2 rounded-md transition duration-300 hover:scale-105"
              >
                اختصاص تمرینات
              </button>
            </form>

            <form onSubmit={addMeal} className="space-y-4 mt-4">
              <h4 className="font-semibold">اضافه کردن برنامه غذایی:</h4>
              <input
                type="text"
                value={mealName}
                onChange={(e) => setMealName(e.target.value)}
                placeholder="نام غذا"
                className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                value={mealDescription}
                onChange={(e) => setMealDescription(e.target.value)}
                placeholder="توضیحات غذا"
                className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#FF0080] to-[#FF8C00] text-white p-2 rounded-md transition duration-300 hover:scale-105"
              >
                اضافه کردن برنامه غذایی
              </button>
            </form>

            <form onSubmit={addSchedule} className="space-y-4 mt-4">
              <h4 className="font-semibold">اضافه کردن زمان تمرین:</h4>
              <input
                type="text"
                value={scheduleDay}
                onChange={(e) => setScheduleDay(e.target.value)}
                placeholder="روز تمرین"
                className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={scheduleTime}
                onChange={(e) => setScheduleTime(e.target.value)}
                placeholder="ساعت تمرین"
                className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#FF0080] to-[#FF8C00] text-white p-2 rounded-md transition duration-300 hover:scale-105"
              >
                اضافه کردن زمان تمرین
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
