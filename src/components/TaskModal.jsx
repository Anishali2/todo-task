import { useDispatch } from "react-redux";
import CrossIcon from "../assets/svgs/cross";
import LinkIcon from "../assets/svgs/link";
import { showTaskModal } from "../state/actions/list_action";
import AddUsers from "./AddUsers";
import CustomCalender from "./CustomCalender";
import * as Yup from "yup";
import { Field, Formik } from "formik";
export default function TaskModal() {
  const dispatch = useDispatch();

  const SignupSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    date: Yup.string().required("Required"),
    attachement: Yup.string(),
  });

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        date: "",
        reminder: "",
        attachement: "",
        assigners: [""],
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
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
          {console.log(values)}
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
                    className="border-transparent bg-transparent focus:border-transparent focus:ring-0"
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
                    className={`${values.description.length >= 70 ? "":"resize-none"}  w-80 p-0 placeholder:italic border-transparent bg-transparent focus:border-transparent focus:ring-0  `   } 
                    placeholder="Add Description"
                  ></textarea>
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-3 flex sm:px-6">
                <dt className="text-md  font-extrabold text-black w-1/4 ">
                  Date{" "}{!values.date && errors.date && touched.date ? (
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
                  Assign
                </dt>
                <AddUsers />
              </div>
              <div className="bg-gray-50 px-4 py-3 flex sm:px-6">
                <dt className="text-md  font-extrabold text-black w-1/4 ">
                  Attachement
                </dt>
                <div>
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
                      accept="image/png,image/jpg ,image/jpeg, image/bmp ,video/mp4 "
                      onChange={(e) => {
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 flex justify-between sm:px-6">
                <dt className="m-3 ">
                  <LinkIcon />
                </dt>
                <button
                  onClick={handleSubmit}
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
