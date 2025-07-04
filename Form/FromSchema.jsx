import * as Yup from 'yup';

export const FromSchema = Yup.object({

    name : Yup.string().min(2,"Its Too Short").max(12 , "Its Too Bigg").required("Name Must Be Entered"),//.().() => function chaining called
    email : Yup.string().email("Enter a Valid Email").required("Email Must and Should Be Entered"),
    pass :  Yup.string()
          .min(8, 'Password must be at least 8 characters')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
            'Password must contain uppercase, lowercase, number, and special character'
          )
          .required('Password is required'),

    age : Yup.number().min(13 ,"You are Too Young").max(50 ,"Above 50 Not Allowed").required("Enter Your Age"),
 
    phone : Yup.number().required("Enter Your Mobile Number"),
    gender : Yup.string().required("Select Gender"),
    membership : Yup.string().required("Select Membership"),
    routine : Yup.string().required("Select Stage")
})