{/* Open the modal using document.getElementById('ID').showModal() method */}
export default function Modal(){
    return ( <><div className="fixed right-5 bottom-5">
        <button className="btn btn-primary rounded-full btn-lg" onClick={() => {(document.getElementById('my_modal_5') as HTMLDialogElement).showModal()}}>Add Task</button><dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Create a new task</h3>
                <input type="text" placeholder="Task Name" className="input input-bordered input-lg w-full max-w-xs" id="name"/>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    </div></>
)}