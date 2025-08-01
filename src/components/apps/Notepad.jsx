import React, { useRef } from "react";
import Draggable from "react-draggable";

const Notepad = ({ isAppOpen, toggleNotepad, bounds }) => {
  const notepadRef = useRef(null);
  return (
    <div className={`${isAppOpen ? "" : "hidden"} z-30 w-full h-screen pointer-events-none absolute`}>
      <Draggable handle=".title-bar" nodeRef={notepadRef} bounds={bounds}>
        <div
          ref={notepadRef}
          className="window bg-white text-black h-[30rem] w-[40rem] rounded-xl overflow-hidden border-neutral-700 border-[1.5px] pointer-events-auto"
        >
          <div className="title-bar">
            <div className="h-9 flex justify-between select-none">
              <div className="m-1 ml-4 font-normal">Notepad</div>
              <div className="flex">
                <div
                  className="material-symbols-outlined hover:bg-neutral-200 mb-2 w-11 flex justify-center items-center text-xl"
                  onClick={toggleNotepad}
                >
                  minimize
                </div>
                <div className="material-symbols-outlined hover:bg-neutral-200 mb-2 w-11 flex justify-center items-center text-sm">
                  check_box_outline_blank
                </div>
                <div
                  className="material-symbols-outlined hover:bg-red-500 mb-2 w-12 flex justify-center items-center text-xl"
                  onClick={toggleNotepad}
                >
                  close
                </div>
              </div>
            </div>
          </div>
          <textarea className="w-full h-full p-2 outline-none resize-none bg-white text-black" />
        </div>
      </Draggable>
    </div>
  );
};

export default Notepad;
