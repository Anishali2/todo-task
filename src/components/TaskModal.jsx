import { useDispatch, useSelector } from "react-redux";
import CrossIcon from "../assets/svgs/cross";
import LinkIcon from "../assets/svgs/link";
import { showTaskModal } from "../state/actions/list_action";
import AddUsers from "./AddUsers";
import CustomCalender from "./CustomCalender";
import * as Yup from "yup";
import { Field, Formik } from "formik";
import { useEffect, useState } from "react";
import { tasks } from "../state/actions/task_action";
import { users as userd } from "../constants/users";

export default function TaskModal() {
  const dispatch = useDispatch();

  const SignupSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    date: Yup.string().required("Required"),

    attachement: Yup.mixed().required("Required"),

    assigners: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string(),
          img: Yup.string(),
          selected: Yup.boolean(),
        })
      )
      .min(1),
  });
  const tas = useSelector((state) => state.task.tasks);
  console.log("tasks", tas);

  const [progress, setProgress] = useState(0);
  const increase = () => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        setProgress(progress + 10);
      }, 1000);
      return () => clearTimeout(timer);
    }
  };
  useEffect(() => {
    if (progress >= 10) {
      increase();
    }
  }, [progress]);
  const bytesToSize = (bytes) => {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "n/a";
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) return `${bytes} ${sizes[i]})`;
    return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
  };
  return (
    <Formik
      enableReinitialize
      initialValues={{
        title: "",
        description: "",
        date: "",
        reminder: "",
        attachement: "",
        assigners: userd,
        status: "Open",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm }) => {
        // reset form after submit
        const newArray = [...tas, values];

        console.log("newArray", tas);
        dispatch(tasks(newArray));
        resetForm();
        setProgress(0);
      }}
    >
      {({
        errors,
        touched,
        handleChange,
        handleSubmit,
        values,
        setFieldValue,
      }) => (
        <div className=" bg-white shadow sm:rounded-lg w-full">
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-3 flex justify-between sm:px-6">
                <dt></dt>
                <dd
                  className=" text-md text-gray-700 mt-2"
                  onClick={() => dispatch(showTaskModal(false))}
                >
                  <CrossIcon />
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-3 flex sm:px-6">
                <dt className="text-md  font-extrabold text-black w-1/4 ">
                  Title{" "}
                  {errors.title && touched.title ? (
                    <span className="text-red-500">*</span>
                  ) : null}
                </dt>
                <dd>
                  <Field
                    name="title"
                    component={"input"}
                    maxlength="30"
                    className="border-transparent w-80 bg-transparent focus:border-transparent focus:ring-0"
                    placeholder="My Title"
                  ></Field>
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-3 flex sm:px-6">
                <dt className="text-md  font-extrabold text-black w-1/4 ">
                  Description{" "}
                  {errors.description && touched.description ? (
                    <span className="text-red-500">*</span>
                  ) : null}
                </dt>
                <dd>
                  <textarea
                    onChange={handleChange("description")}
                    value={values.description}
                    name="description"
                    className={`${
                      values.description.length >= 70 ? "" : "resize-none"
                    }  w-80 p-0 placeholder:italic border-transparent bg-transparent focus:border-transparent focus:ring-0  `}
                    placeholder="Add Description"
                  ></textarea>
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-3 flex sm:px-6">
                <dt className="text-md  font-extrabold text-black w-1/4 ">
                  Date{" "}
                  {!values.date && errors.date && touched.date ? (
                    <span className="text-red-500">*</span>
                  ) : null}
                </dt>
                <dd className="text-md text-gray-500 w-1/4 ">
                  <CustomCalender
                    date={values.date}
                    setDate={setFieldValue}
                    reminder={values.reminder}
                  />
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-3 flex sm:px-6">
                <dt className="text-md  font-extrabold text-black w-1/4 ">
                  Creater
                </dt>
                <img
                  class="h-8 w-8 -mt-1 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="bg-gray-50 px-4 py-3 flex sm:px-6">
                <dt className="text-md  font-extrabold text-black w-1/4 ">
                  Assign{" "}
                  {errors.assigners && touched.assigners ? (
                    <span className="text-red-500">*</span>
                  ) : null}
                </dt>
                <AddUsers users={values.assigners} setUser={setFieldValue} />
              </div>
              <div className="bg-gray-50 px-4 py-3 flex sm:px-6">
                <dt className="text-md  font-extrabold text-black w-1/4 ">
                  Attachement
                  {errors.attachement && touched.attachement ? (
                    <span className="text-red-500">*</span>
                  ) : null}
                </dt>
                <div>
                  {progress === 100 ? (
                    <div className="flex mt-[2px]">
                      <div className="flex items-center">
                        <div className="flex ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {values.attachement.name}
                          </div>
                          <div className=" ml-2 text-sm text-gray-500">
                            ({bytesToSize(values.attachement.size)})
                          </div>
                        </div>
                      </div>
                      <div
                        className="ml-4"
                        onClick={() => {
                          setFieldValue("attachement", "");
                          setProgress(0);
                        }}
                      >
                        <div className="text-sm mt-1 font-medium text-gray-900">
                          <CrossIcon />
                        </div>
                      </div>
                    </div>
                  ) : progress >= 20 ? (
                    <div className="w-[100px] mt-2.5 transition-all h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-[#a7c040] rounded-full"
                        style={{
                          width: `${progress}%`,
                          transition: "width 2s",
                        }}
                      />
                    </div>
                  ) : (
                    <div className="browse">
                      <input
                        type="button"
                        id="get_file"
                        className="btn-main"
                        value="Browse"
                      />
                      <input
                        id="upload_file"
                        type="file"
                        name="upload_file"
                        accept=".pdf"
                        onChange={(e) => {
                          setProgress(10);
                          setFieldValue("attachement", e.target.files[0]);
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 flex justify-between sm:px-6">
                <dt className="m-3 ">
                  <LinkIcon />
                </dt>
                {console.log(progress)}
                <button
                  onClick={handleSubmit}
                  disabled={progress === 0 || progress === 100 ? false : true}
                  className=" text-md w-fit h-auto p-3 px-5 bg-[#A7C040] rounded-md text-white sm:mt-0 hover:bg-[#A7C04090]"
                >
                  SAVE
                </button>
              </div>
            </dl>
          </div>
        </div>
      )}
    </Formik>
  );
}
