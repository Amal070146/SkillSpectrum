import { LogoSVG } from "../../assets/svg"

type Props = {
    val:boolean
}

export const Signup = ({val}: Props) => {
  return (
    <div>
      <LogoSVG />
      <div>
        <h2>Dedicated to navigating futures and shaping careers.</h2>
      </div>
      <div>
        <div>
          <p>Full Name</p>
          <input type="text" placeholder="Robert Langster" />
        </div>
        <div>
          <p>Email</p>
          <input type="text" placeholder="robert.langster@gmail.com" />
        </div>
        <div>
          <p>Password</p>
          <input type="passwprd" placeholder="....." />
        </div>
        <div>
          <div>
            <input type="checkbox" checked />
            Remeber Me
          </div>
          <div>Forgot Password?</div>
        </div>
      </div>
      <div>
        <button>Log In</button>
        <button style={{ backgroundColor: "#4318FF" }}>Sign Up</button>
      </div>
      <div>
        <p>Or, Login with</p>
        <a href="">Facebook</a>
        <a href="">LinkedIn</a>
        <a href="">Google</a>
      </div>
    </div>
  );
}