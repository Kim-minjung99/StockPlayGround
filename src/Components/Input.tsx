// import { Children, HTMLAttributes, ReactElement, ReactNode, cloneElement, useId } from 'react';

// import colors from '../constants/colors';

// interface InputProps extends HTMLAttributes<HTMLDivElement> {
//   label?: ReactNode;
//   children: ReactElement;
//   bottomText?: string;
// }

// function Input({ label, children, bottomText, ...props }: InputProps) {
//   const child = Children.only(children);
//   const generatedId = useId();
//   const id = child.props.id ?? generatedId;
//   const isError: boolean = child.props.hasError ?? false;

//   return (
//     <div css={{ width: '100%' }} {...props}>
//       <label
//         htmlFor={id}
//         css={{
//           display: 'inline-block',
//           padding: '5px 0',
//           fontSize: '15px',
//           fontWeight: '500',
//           lineHeight: 1.6,
//           color: colors.grey700,
//         }}
//       >
//         {label}
//       </label>
//       {cloneElement(child, {
//         id,
//         ...child.props,
//       })}
//       {bottomText != null ? (
//         <p
//           css={{
//             color: isError ? colors.red600 : colors.grey600,
//             marginTop: '4px',
//             display: 'inline-block',
//             fontWeight: 400,
//             fontSize: '15px',
//           }}
//         >
//           {bottomText}
//         </p>
//       ) : null}
//     </div>
//   );
// }

// export default Input;
export {}
