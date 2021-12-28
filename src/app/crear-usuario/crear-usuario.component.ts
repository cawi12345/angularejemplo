import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  //----Se inicializa el formulario-----
  nuevoUsuarioForm: FormGroup = this.formBuilder.group({
    instituto:['', [Validators.required]],
    unicodigo:['',[Validators.required,Validators.pattern('\\-?\\d*\\.?\\d{1,2}')]],
    establecimiento:['',[Validators.required]],
    archivo:['',[Validators.required,Validators.pattern('\\-?\\d*\\.?\\d{1,2}')]],
    hoja:['',[Validators.required,Validators.pattern('\\-?\\d*\\.?\\d{1,2}')]],
    cedula: [
      '',
      [Validators.required, Validators.minLength(10), Validators.maxLength(10)],
    ],
    nombre: ['', [Validators.required,Validators.pattern("[a-z]{1,15}")]],
    seg_nombre: ['', [Validators.required,Validators.pattern("[a-z]{1,15}")]],
    apellido: ['', [Validators.required,Validators.pattern("[a-z]{1,15}")]],
    seg_apellido: ['', [Validators.required,Validators.pattern("[a-z]{1,15}")]],
    sexo: ['', [Validators.required,Validators.pattern("[a-z]{1,15}")]],
    edad:['',[Validators.required,Validators.pattern('\\-?\\d*\\.?\\d{1,2}'),Validators.minLength(1), Validators.maxLength(2)]],
   
  });
  constructor(private formBuilder: FormBuilder) { }
  instituto:String="";
  unicodigo:String="";
  establecimiento:String="";
  cedula:String="";
  nombre:string="";
  apellido:string="";
  sexo:string="";
  edad:string="";

  ngOnInit(): void {
  }
  enviarDatos(){
  this.instituto=this.nuevoUsuarioForm.controls.instituto.value;
  this.unicodigo=this.nuevoUsuarioForm.controls.unicodigo.value;
  this.establecimiento=this.nuevoUsuarioForm.controls.establecimiento.value;
  this.cedula=this.nuevoUsuarioForm.controls.cedula.value;
  this.sexo=this.nuevoUsuarioForm.controls.sexo.value;
  this.edad=this.nuevoUsuarioForm.controls.edad.value;
  this.nombre=this.nuevoUsuarioForm.controls.nombre.value;
  this.apellido=this.nuevoUsuarioForm.controls.apellido.value;
    
  let body={
    instituto:this.instituto,
    unicodigo:this.unicodigo,
    establecimiento:this.establecimiento,
    cedula:this.cedula,
    sexo:this.sexo,
    edad:this.edad,
    Primer_nombre:this.nombre,
    Segundo_nombre:this.apellido,
    }
    console.log(body);
  }

  
}
