import React from "react";
import "./styling/UserAddForm.css";

class UserAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      salary: "",
      isGoldClient: false,
      nameError: "",
      emailError: "",
      salaryError: "",
    };
  }

  updateName(event) {
    this.setState({ name: event.target.value });
  }

  updateEmail(event) {
    this.setState({ email: event.target.value });
  }

  updateSalary(event) {
    this.setState({ salary: event.target.value });
  }

  updateIsGoldClient(event) {
    this.setState({ isGoldClient: event.target.checked });
  }

  validateForm() {
    let nameError = "";
    let emailError = "";
    const emailModel = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    let salaryError = "";

    if (this.state.name.length < 3 || !this.state.name) {
      nameError = "Trebuie să introduci un nume!";
    }

    if (!emailModel.test(this.state.email)) {
      emailError = "Adresa email nu este validă!";
    }

    if (!this.state.salary) {
      salaryError = "Trebuie să introduci salariul!";
    }

    if (nameError || emailError || salaryError) {
      this.setState({ nameError, emailError, salaryError });
    }
  }

  render() {
    const {
      name,
      email,
      salary,
      isGoldClient,
      nameError,
      emailError,
      salaryError,
    } = this.state;

    return (
      <form
        className="user-add-form"
        onSubmit={(event) => {
          this.validateForm();
          this.props.submitAddForm(event, name, email, salary, isGoldClient);
        }}
      >
        <h2>Adaugă utilizatori</h2>
        {/* Name */}
        <label htmlFor="name">Nume:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={this.state.name}
          onChange={(event) => this.updateName(event)}
        />
        <div className="errors">{nameError}</div>

        {/* Email */}
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          name="email"
          value={this.state.email}
          onChange={(event) => this.updateEmail(event)}
        />
        <div className="errors">{emailError}</div>

        {/* Salary */}
        <label htmlFor="salary">Salariu (adaugă valută :D):</label>
        <input
          id="salary"
          type="text"
          name="salary"
          value={this.state.salary}
          onChange={(event) => this.updateSalary(event)}
        />
        <div className="errors">{salaryError}</div>

        {/* Gold Client */}
        <label htmlFor="is-gold-client" className="checkbox-container">
          Client GOLD
          <input
            id="is-gold-client"
            type="checkbox"
            name="is-gold-client"
            checked={this.state.isGoldClient}
            onChange={(event) => this.updateIsGoldClient(event)}
          />
        </label>

        <input type="submit" value="Introdu utilizatorul" />
      </form>
    );
  }
}

export default UserAddForm;
