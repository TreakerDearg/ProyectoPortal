import mongoose from "mongoose";

const alumnoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      trim: true,
      minlength: [2, "El nombre debe tener al menos 2 caracteres"],
    },
    apellido: {
      type: String,
      required: [true, "El apellido es obligatorio"],
      trim: true,
    },
    correo: {
      type: String,
      required: [true, "El correo es obligatorio"],
      unique: true,
      lowercase: true,
      match: [/.+@.+\..+/, "Formato de correo inválido"],
    },
    curso: {
      type: String,
      required: true,
      enum: ["1A", "1B", "2A", "2B", "3A", "3B", "4A", "4B"],
    },
    fechaRegistro: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Alumno", alumnoSchema);
