import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>(
    {
      resolver: zodResolver(schema),
    }
  )
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

    </form>
  )
}

export default Form