import { useState } from "react";
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null,
};

const deleteReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "DELETE_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: true, error: action.payload };
    default:
      return state;
  }
};

export const useDeleteDocument = (docCollection) => {
  const [response, dispatch] = useState(initialState);

  const deleteDocument = async (id) => {
    dispatch({
      type: "LOADING",
    });

    try {
      await deleteDoc(doc(db, docCollection, id));

      dispatch({
        type: "DELETED_DOC",
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };

  return { deleteDocument, response };
};

