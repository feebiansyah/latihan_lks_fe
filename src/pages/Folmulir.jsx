import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Label from "../components/elements/Label";
import Input from "../components/elements/Input";

const Folmulir = () => {
  const [forms, setForms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });


  //untuk fetch data dari api
  useEffect(() => {
    const fetchForms = async () => {
      try {
        const token = localStorage.getItem("authToken");

        if (token) {
          const response = await axios.get(
            "http://192.168.100.10:8000/api/v1/forms",

            { headers: { Authorization: `Bearer ${token}` } }
          );
          setForms(response.data.forms);
        }
      } catch (err) {
        console.log(err);
      } finally {
      }
    };
    fetchForms();
  }, []);

  //untuk store data ke api


  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h1 className="text-center">List Formulir</h1>
          <button
            className="btn btn-primary mb-3"
            onClick={() => setShowModal(true)}
          >
            Buat Formulir
          </button>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>NO</th>
                <th>Judul</th>
                <th>Deskripsi</th>
              </tr>
            </thead>
            <tbody>
              {forms.map((form) => (
                <tr key={form.key}>
                  <td>{1}</td>
                  <td>{form.name}</td>
                  <td>{form.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div
          className="modal show"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create New Folmulir</h5>
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form >
                    <div className="form-group">
                        <Label htmlFor="name">Judul:</Label>
                        <Input type="text" name="name" id="name" placeholder="Masukan judul folmulir." required></Input>
                    </div>
                </form>
              </div>
              <div className="modal-footer">

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Folmulir;
