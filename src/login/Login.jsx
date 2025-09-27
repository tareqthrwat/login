import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import img1 from "./img/صورة واتساب بتاريخ 2025-09-27 في 15.49.02_c8dc901c.jpg"
import img2 from "./img/logo-2-light.png"
export default function Login() {
  const validationSchema = Yup.object({
    email: Yup.string().email("دخل الاميل عدل يا جحش ").required("يا اعمي الاميل "),
    password: Yup.string().required("يا اعمي الباسورد "),
  });
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative left w-[30%] h-screen ">
        {/* الخلفية */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img1})` }}
        ></div>
        {/* overlay أسود شفاف */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* المحتوى */}
        <div className="relative z-10 content p-16 text-white ">
          <img src={img2} alt="logo" className="w-20 mb-4" />
          <div className="w-48">
            <h1 className="text-4xl font-bold">Welcome,</h1>
            <p className="text-4xl">We are glad to see you again!</p>
          </div>
        </div>
      </div>
      <div className="w-[70%] h-full flex items-center justify-center ">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="w-[400px] p-4 rounded-xl border bg-[#ffffff2b] flex flex-col gap-4 shadow-xl/30  ">
            <div className="flex flex-col items-center w-full">
              <h1 className="text-3xl font-bold">Welcome Back</h1>
              <p>Sidn to your account</p>

            </div>

            <Field
              name="email"
              className="w-full input"
              placeholder="Enter Your Email"
            />
            <ErrorMessage name="email" component={"p"} className="text-red-700" />
            <Field
              name="password"
              className="w-full input"
              placeholder="Enter Your Password"
            />
            <ErrorMessage name="password" component={"p"} className="text-red-700" />


            <label

              className="flex flex-row items-center gap-2.5 dark:text-white light:text-black"
            >
              <input id="hr" type="checkbox" className="peer hidden" />
              <div

                className="h-5 w-5 flex rounded-md border border-[#a2a1a833] light:bg-[#e8e8e8] dark:bg-[#212121] peer-checked:bg-[#7152f3] transition"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 light:stroke-[#e8e8e8] dark:stroke-[#212121]"
                  xmlns="http://www.w3.org/2000/svg"
                >

                </svg>
              </div>

            </label>


            <p>---------------------------or---------------------------</p>
            {/* <!-- From Uiverse.io by shubhamshahane1234 --> */}
            <div className="flex items-center gap-4 justify-center">

              <div className="social-button">
                <button className="relative w-12 h-12 rounded-full group">
                  <div
                    className="floater w-full h-full absolute top-0 left-0 bg-black rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
                  ></div>
                  <div
                    className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-black rounded-full"
                  >
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-[#171543] fill-white duration-300"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.17 6.839 9.481.5.092.683-.217.683-.481 0-.237-.009-.866-.013-1.699-2.782.603-3.37-1.338-3.37-1.338-.454-1.15-1.11-1.458-1.11-1.458-.906-.619.069-.606.069-.606 1.002.071 1.527 1.03 1.527 1.03.89 1.529 2.34 1.087 2.911.831.091-.645.348-1.087.634-1.338-2.22-.252-4.555-1.11-4.555-4.94 0-1.09.39-1.986 1.028-2.682-.103-.252-.446-1.268.098-2.642 0 0 .837-.268 2.75 1.024a9.563 9.563 0 012.496-.335 9.58 9.58 0 012.496.335c1.913-1.292 2.75-1.024 2.75-1.024.544 1.374.202 2.39.1 2.642.64.696 1.027 1.592 1.027 2.682 0 3.839-2.338 4.685-4.567 4.933.358.309.678.916.678 1.847 0 1.334-.012 2.412-.012 2.74 0 .267.18.577.688.481A12.01 12.01 0 0022 12c0-5.523-4.477-10-10-10z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
              <div className="social-button">
                <button className="relative w-12 h-12 rounded-full group">
                  <div
                    className="floater w-full h-full absolute top-0 left-0 bg-blue-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
                  ></div>
                  <div
                    className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-500 rounded-full"
                  >
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-[#171543] fill-white duration-300"
                        d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8.5,19H6V10h2.5V19z M7.3,9 h-0.1C6.4,9,6,8.6,6,8.1V7.9c0-0.5,0.4-0.9,0.9-0.9h0.1C7.6,7,8,7.4,8,7.9v0.1C8,8.6,7.6,9,7.3,9z M19,19h-2.5v-4.9 c0-1.2-0.4-2-1.4-2c-0.8,0-1.3,0.6-1.5,1.2h-0.1V19H10V10h2.3v1.3h0C12.7,10.7,14,9.9,15.5,9.9c2.1,0,3.5,1.4,3.5,3.8V19z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
              <div className="social-button">
                <button className="relative w-12 h-12 rounded-full group">
                  <div
                    className="floater w-full h-full absolute top-0 left-0 bg-red-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
                  ></div>
                  <div
                    className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-red-400 rounded-full"
                  >
                    <svg
                      height="32"
                      width="32"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-[#171543] fill-white duration-300"
                        d="M28 5H4c-1.104 0-2 .896-2 2v18c0 1.104.896 2 2 2h24c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zm0 4.879L16 18 4 9.879V7l12 8 12-8v2.879zM4 23V11.885l11.446 7.63c.269.18.594.274.921.274s.652-.094.92-.274L28 11.885V23H4z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>


            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </Form>
        </Formik>

      </div>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
}