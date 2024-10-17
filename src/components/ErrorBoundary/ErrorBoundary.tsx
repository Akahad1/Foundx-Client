// eslint-disable-next-line prettier/prettier
"use client";

import { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}
interface ErrorBoundaryState {
  hashError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hashError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hashError: true };
  }
  render(): ReactNode {
    if (this.state.hashError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;

// class ErrorBoundary extends Component<ErrorBoundaryProps,ErrorBoundaryState>{
//     constructor(props:ErrorBoundaryProps){
//         super(props)
//         this.state={
//             hashError:false
//         }
//     }

//     static getDerivedStateFromError(){
//         return {hashError:true}
//     }
//     render(): ReactNode {
//            if(this.state.hashError){
//             return this.props.fallback
//            }
//            return this.props.children
//     }
// }
