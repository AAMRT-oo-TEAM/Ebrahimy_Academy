import React, { useState } from "react";

const UserDashboard = () => {
  const [students] = useState([
    {
      name: "علی",
      exercises: [
        { name: "دو سرعت ۲۰۰ متر", time: "۱۵ دقیقه", reps: 5 },
        { name: "وزنه‌برداری: اسکات", time: "۲۰ دقیقه", reps: 3 },
        { name: "تمرین استقامت: ۵ کیلومتر دویدن", time: "۳۰ دقیقه", reps: 1 },
      ],
      dietPlan: {
        breakfast: "تخم‌مرغ، نان سبوس‌دار، میوه",
        lunch: "مرغ کبابی، برنج قهوه‌ای، سالاد سبز",
        postWorkout: "پروتئین شیک، موز",
        dinner: "ماهی، سیب‌زمینی آبپز، سبزیجات",
      },
      records: {},
    },
    {
      name: "ممد",
      exercises: [
        { name: "دو استقامت ۱۰۰۰ متر", time: "۲۰ دقیقه", reps: 2 },
        { name: "تمرین قدرت: جلو بازو با دمبل", time: "۱۵ دقیقه", reps: 4 },
        {
          name: "تمرین سرعت: ۱۰ دور استارت ۶۰ متر",
          time: "۱۰ دقیقه",
          reps: 10,
        },
      ],
      dietPlan: {
        breakfast: "جو دو سر، کره بادام، توت‌فرنگی",
        lunch: "گوشت گاو، سیب‌زمینی شیرین، کلم بروکلی",
        postWorkout: "ماست یونانی، مغزها",
        dinner: "سبزیجات بخارپز، تخم‌مرغ آبپز، نان کامل",
      },
      records: {},
    },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [record, setRecord] = useState("");

  const handleRecordSubmit = (exerciseName) => {
    setSelectedStudent((prevStudent) => ({
      ...prevStudent,
      records: {
        ...prevStudent.records,
        [exerciseName]: record,
      },
    }));
    setRecord("");
  };

  return (
    <div className="min-h-screen bg-[#121212] text-right p-5">
      <header className="bg-gradient-to-r from-[#FF0080] to-[#FF8C00] p-4 text-center rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">
          پنل کاربری - برنامه تمرینات و تغذیه
        </h1>
      </header>

      <main className="mt-4 p-6 bg-gray-850 rounded-lg shadow-md flex">
        {/* بخش تقویم تمرینات */}
        <div className="w-2/3 p-4 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-white mb-4">
            برنامه تمرینات هفتگی
          </h2>
          <div className="grid grid-cols-7 gap-3 text-center text-white">
            {selectedStudent &&
              selectedStudent.exercises.map((exercise, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedExercise(exercise)}
                  className="p-3 bg-gray-700 rounded-lg hover:bg-[#FF8C00] transition duration-300 cursor-pointer"
                >
                  روز {index + 1}
                </div>
              ))}
          </div>
        </div>

        {/* نمایش جزئیات تمرین */}
        <div className="w-1/3 ml-4 p-4 bg-gray-700 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-white mb-4">
            جزئیات تمرین
          </h3>
          {selectedExercise ? (
            <>
              <p className="text-gray-300">{selectedExercise.name}</p>
              <p className="text-gray-400">زمان: {selectedExercise.time}</p>
              <p className="text-gray-400">تعداد: {selectedExercise.reps}</p>
              <div className="mt-4">
                <input
                  type="text"
                  value={record}
                  onChange={(e) => setRecord(e.target.value)}
                  placeholder="ثبت رکورد"
                  className="w-full p-2 rounded bg-gray-600 text-white"
                />
                <button
                  onClick={() => handleRecordSubmit(selectedExercise.name)}
                  className="mt-2 w-full p-2 bg-[#FF8C00] rounded text-white"
                >
                  ذخیره رکورد
                </button>
              </div>
              {selectedStudent.records[selectedExercise.name] && (
                <p className="text-green-400 mt-2">
                  رکورد شما: {selectedStudent.records[selectedExercise.name]}
                </p>
              )}
            </>
          ) : (
            <p className="text-gray-500">
              یک شاگرد و روز تمرین را انتخاب کنید.
            </p>
          )}
        </div>
      </main>

      {/* بخش شاگردان */}
      <section className="mt-6 p-6 bg-gray-850 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-white">لیست شاگردان</h2>
        <div className="mt-4 text-gray-300">
          <ul className="list-disc list-inside">
            {students.map((student) => (
              <li
                key={student.name}
                onClick={() => {
                  setSelectedStudent(student);
                  setSelectedExercise(null);
                }}
                className="flex justify-between items-center hover:bg-gray-700 rounded-md p-2 transition duration-300 cursor-pointer"
              >
                <span className="text-blue-400">{student.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* بخش برنامه غذایی */}
      {selectedStudent && (
        <section className="mt-6 p-6 bg-gray-850 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-white">برنامه غذایی</h2>
          <div className="mt-2 text-gray-300">
            <p>
              <strong>صبحانه:</strong> {selectedStudent.dietPlan.breakfast}
            </p>
            <p>
              <strong>نهار:</strong> {selectedStudent.dietPlan.lunch}
            </p>
            <p>
              <strong>بعد از تمرین:</strong>{" "}
              {selectedStudent.dietPlan.postWorkout}
            </p>
            <p>
              <strong>شام:</strong> {selectedStudent.dietPlan.dinner}
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default UserDashboard;
