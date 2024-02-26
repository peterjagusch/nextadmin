import { addUser } from "@/app/lib/actions";
import React from "react";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

/*
Name	Email	Created At	Role	Status	Action
*/
function AddUserPage() {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="User Name" name="username" required />
        <input type="email" placeholder="Email" name="email" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <input type="phone" placeholder="Phone" name="phone" required />
        <select name="isAdmin" id="isAdmin">
          <option value={false} defaultValue>
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true} defaultValue>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          cols="30"
          rows="10"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddUserPage;
