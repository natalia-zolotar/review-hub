import { doc, getDocs, setDoc, collection, query, orderBy } from "firebase/firestore"
import { DB_FIREBASE } from "./index"

export const addReviewToDB = async (data) => {
  try {
    const reviewRef = doc(DB_FIREBASE, "reviews", data.id)
    await setDoc(reviewRef, data)

    return { is: true, data}
  } catch (e) {
    return { text : e.message, is : false }
  }
}

export const getReviewsFromDB = async () => {
  try {
    const collectionRef = collection(DB_FIREBASE, 'reviews')

    const q = query(
      collectionRef,
      orderBy('id', 'desc')
    )

    const response = await getDocs(q)

    if (response.empty) {
      return { is: true, data: [] }
    }

    const data = response.docs.map(doc => doc.data())

    return { is: true, data }
  } catch (e) {
    return { text : e.message, is : false }
  }
}