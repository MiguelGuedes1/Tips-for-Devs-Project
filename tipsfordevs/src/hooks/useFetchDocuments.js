import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { 
    collection,
    doc,
    getDoc,
    query,
    orderBy,
    onSnapshot,
    where,
 } from "firebase/firestore";








 export const useFetchDocuments = (docCollection, search=null,uid=null) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // Lidar com fugas de memoria
const [cancelled,setCancelled]=useState(false)

  useEffect(() => {

    async function loadData(){
        if(cancelled) return

        setLoading(true)

        const collectionRef = await collection(db,docCollection)

        try {
            
            let q

            if(search){
              q=await query(
                collectionRef,
                where("tagsArray","array-contains",search),
                orderBy("createAt","desc")
              )}

              else if(uid){
                q=await query(
                  collectionRef,
                  where("uid","==",uid),
                  orderBy("createAt","desc")
                )
              }
              else {
                q=await query (collectionRef,orderBy("createAt","desc"))
              }
            


            await onSnapshot(q,(querySnapshot)=>{
                setDocuments(
                        querySnapshot.docs.map((doc)=>({
                            id:doc.id,
                            ...doc.data(),
                        }))
                )
            })

            setLoading(false)

        } catch (error) {
            console.log(error)
            setError(error.message)

            setLoading(false)
        }

    
    }

    loadData()
    
  }, [docCollection, search,uid,cancelled]);

  useEffect(()=>{
    return() => setCancelled(true)
  },[])


  return {documents,loading,error}

}


// Procura de post individual para exibir na PostDetailPage


export const getDocumentById = async (docCollection, docId) => {
  const docRef = doc(db, docCollection, docId);
  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    return { id: docSnapshot.id, ...docSnapshot.data() };
  } else {
    throw new Error('Documento não encontrado');
  }
};








