export default function ModalContent({closeModal}) {
  return (
    //Creation overlay
    <div 
        className="flex items-center justify-center fixed inset-0 bg-slate-800/75"
        //Pour fermer la modal sur l'overlay
        // un click sur l ecran hor modal fermera la modal
        onClick={closeModal}
    >
        <div 
            className=" bg-slate-300 text-slate-900 p-10 rounded relative mb-[10px]"
            //Pour stopper la propagation du close modal SUR la modal
            // le click sur la modal ne fermera pas la modal
            onClick={(e) => e.stopPropagation()} 
        >
            <button 
                className="absolute top-1 right-1 w-7 h-7 bg-red-600 text-slate-100 rounded flex justify-center"
                    // un click sur l ecran hor modal fermera la modal
                onClick={closeModal}
            >
                X
            </button>

            <p>Voilà du contenu</p>
        </div>
    </div>
  )
}
