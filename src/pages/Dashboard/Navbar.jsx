import React from "react";
import Container from "../../components/shared/Container";

const Navbar = () => {
  return (
    <div className="border-b h-[13%] shadow-sm">
      <Container>
        <div className="navbar bg-base-100 ">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl underline">
              Power Consumption Trend
            </a>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
