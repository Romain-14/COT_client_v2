import { Link } from "react-router-dom";


function Button({children, id}) {
  return (
    <Link to={"/tea/" + id} className="linkDetail">{children}</Link>
  )
}

export default Button