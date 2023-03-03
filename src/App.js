import { useState } from "react";
import "./App.css";
import { useForm } from 'react-hook-form';

export default function App() {
  const [values, setValues] = useState();
  // const [errors, setErrors] = useState([]);

  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  /// add function when value change
  const handleChange = (event) => {
    event.persist();

    if (event.target.name === 'isRead') {
      setValues({
        ...values,
        [event.target.name]: !values.isRead,
      });
    } else {
      setValues({ ...values, [event.target.name]: event.target.value });
    }

  };


  console.log('errors', errors);


  const stringJson = JSON.stringify(values);
  return (
    <div className="container">
      <h1>Khai báo y </h1>
      {/* {errors.map((error) => (
        <p key={error}>Error: {error}</p>
      ))} */}
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <p>Họ và tên:</p>
        <input
          {...register('text', {
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid"
            }
          })}
        />
        {errors?.text && <div> {errors?.text?.message}</div>}
        <p>Địa chỉ:</p>
        <input
          {...register('text', {
            required: "Required",
  
          })}
          type="text"
        />
        {errors?.text && <div> {errors?.text?.message}</div>}
        <p>Số điện thoại:</p>
        <input
          {...register('tel', {
            required: "Required",
            validate: (val) => {
              if (watch('tel') != val) {
                return "Vui lòng nhập số điện thoại";
              }
            },
          })}
          type="tel"
        />
        {errors?.tel && <div> {errors?.tel?.message}</div>}
        <p>Email:</p>
        <input
          {...register('email', {
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            }
          })}
        />
        {errors?.email && <div> {errors?.email?.message}</div>}
        <br />
        <br />
        <p>Trong vòng 14 ngày qua có dấu hiệu triệu chứng gì: </p>
        <label>
          <input
            {...register('checkbox', {
              required: "Required",
            })}
            type="checkbox"
          />Ho
        </label>
        <label>
          <input
            {...register('checkbox', {
              required: "Required",
            })}
            type="checkbox"
          />Sốt
        </label>
        <label>
          <input
            {...register('checkbox', {
              required: "Required",
            })}
            type="checkbox"
          />Đau họng
        </label>
        <label>
          <input
            {...register('checkbox', {
              required: "Required",
            })}
            type="checkbox"
          />Triệu chứng khác 
        </label>

        <p>Hoàn thành khai báo </p>
        <button>Gửi </button>
      </form >
      <div className="show-json-string-setValues">{stringJson}</div>
    </div >
  );
}

