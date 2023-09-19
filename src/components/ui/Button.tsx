import {Button as ButtonA , ButtonProps as ButtonPropsA} from "antd"

type ButtonPros = ButtonPropsA & {
    // Định nghĩa thêm pros của mình
}

export const Button = (props : ButtonPros) => {
    return <ButtonA {...props} />
}