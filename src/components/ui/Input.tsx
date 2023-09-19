import { HTMLInputTypeAttribute } from "react"
import { UseFormRegister } from "react-hook-form"

type InputProps = {
    label ?: string,
    id?: string,
    type?: HTMLInputTypeAttribute,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register ?: UseFormRegister<any>,
    error ?: string,
    placeholder ?:string,
    className ?: string,
}

export const Input = ({label,id,type = "text",register,error , placeholder , className = ""} : InputProps) => {
  return (
    <div className={className}>
        {!!label && <label htmlFor="taiKhoan">{label}</label>}
                <input
                    id={id}
                    type={type}
                    className="p-10 mt-8 w-full rounded-6  bg-[#333]"
                    placeholder={placeholder}
                    // {...register("taiKhoan", {
                    //     required: "Vui lòng nhập tài khoản",
                    //     maxLength: {
                    //         value: 20,
                    //         message: "Tối đa chỉ được 20 ký tự",
                    //     },
                    //     minLength: {
                    //         value: 6,
                    //         message: "Nhập tối thiểu 6 ký tự",
                    //     },
                    // })}
                    {...register?.(id)}
                />
                {!!error  && (
                    <p className="text-red-500 text-14 mt-2">
                        {error}
                    </p>
                )}
    </div>
  )
}
