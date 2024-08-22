#include <iostream>
#include <fstream>
#include <string>     // std::string, std::to_string
#include <cstring>
#include <stdio.h>
#include <stdlib.h>

using namespace std;

struct Jugador{
	string nombre;
	char tablero_barcos[11][11]={{'1','2','3','4','5','6','7','8','9','1','0'},{'A'},{'B'},{'C'},{'D'},{'E'},{'F'},{'G'},{'H'},{'I'},{'J'}};
	char tablero_disparos[11][11]={{'1','2','3','4','5','6','7','8','9','1','0'},{'A'},{'B'},{'C'},{'D'},{'E'},{'F'},{'G'},{'H'},{'I'},{'J'}};
	string porta_aviones[5];
	string fragata[4];
	string crucero[3];                                                                                
	string submarino[3];
	string destructor[2];
};

int menu_general();
void cambiar_nombre(Jugador *jugador1, Jugador *jugador2);
void reiniciar_tableros(Jugador *jugador);
void imprimir_tablero(char tablero[11][11]);
void iniciar_juego(Jugador *jugador1, Jugador *jugador2);
void ubicar_barcos(Jugador *jugador);
int menu_direccion();
void ubicar_barco(Jugador *jugador, int tamanio,int opc);
bool dispara(Jugador *jugador1, Jugador *jugador2);
int buscar_barco(Jugador *jugador,string coordenada);
bool buscar_sobrevivientes(Jugador *jugador);
bool hundido(Jugador *jugador,int opc);
bool iniciarPrograma(Jugador *jugador1, Jugador *jugador2);
void escribirArchivo(Jugador *ganador, Jugador *perdedor);


string FILENAME = "filename.txt";

int main() {

	Jugador jugador1, jugador2;
	int opcion;

	cout
			<< "BIENVENIDO AL JUEGO DE BATTALA NAVAL \n\nPara iniciar a jugar digite los nombres de los jugadores \n"
			<< endl;
	if(!iniciarPrograma(&jugador1,&jugador2)){
		cout << "Digite nombre del jugador 1: " << endl;
		getline(cin, jugador1.nombre);

		cout << "Digite nombre del jugador 2: " << endl;
		getline(cin, jugador2.nombre);
	}
	do {
		getchar();
		system("clear");
		opcion = menu_general();

		switch (opcion) {
		case 1:
			cambiar_nombre(&jugador1, &jugador2);

			break;
		case 2:
			iniciar_juego(&jugador1, &jugador2);

			break;
		case 3:

			break;
			;
		case 0:
			cout << "Gracias por jugar\nTen un buen dia :) " << endl;
			break;
		default:
			cout << "Esa opcion no existe" << endl;
			break;
		}
	} while (opcion != 0);

	return 0;
}




//funciones del programa

int menu_general() {
	int opcion = 0;
	cout
			<< "-------------------------------"
					"\nDigite que opcion requiere: \n\n 1. Cambiar nombre jugadores \n 2. "
					"Iniciar juego \n 0. Salir del "
					"juego\n-------------------------------" << endl;
	cin >> opcion;
	return opcion;

}

void cambiar_nombre(Jugador *jugador1, Jugador *jugador2) {
	int opcion = 0;
	string nombreNU1, nombreNU2;
	cout << "El nombre de sus jugadores son:\nJUGADOR 1: " << jugador1->nombre
			<< "\nJUGADOR 2: " << jugador2->nombre
			<< "\nQue jugador quiere cambiar de nombre? \nMarque (1) o (2): "
			<< endl;
	cin >> opcion;
	while (opcion > 2) {
		cout << "Opción invalida" << endl;
		cout << "Que jugador quiere cambiar de nombre? " << endl;
		cin >> opcion;
	}
	if (opcion == 1) {
		cout << "Digite el nombre nuevo del JUGADOR 1:" << endl;
		cin >> nombreNU1;
		jugador1->nombre = nombreNU1;
	}
	if (opcion == 2) {
		cout << "Digite el nombre nuevo del JUGADOR 2: " << endl;
		cin >> nombreNU2;
		jugador2->nombre = nombreNU2;
	}
}

void reiniciar_tableros(Jugador *jugador) {
	for (int i = 1; i < 11; i++) {
		for (int j = 1; j < 11; j++) {
			jugador->tablero_barcos[i][j] = '-';
			jugador->tablero_disparos[i][j] = '-';

		}
	}
}

void imprimir_tablero(char tablero[11][11]) {

	cout << "  ";
	for (int i = 0; i < 11; i++) {
		for (int j = 0; j < 11; j++) {
			if (i == 0 && j == 9) {
				cout << tablero[i][j] << tablero[i][j + 1];
			} else if (i == 0 && j == 10) {
			} else {
				cout << tablero[i][j] << " ";
			}

		}
		cout << endl;
	}
}

void iniciar_juego(Jugador *jugador1, Jugador *jugador2) {
	bool hay_ganador=false;
	reiniciar_tableros(jugador1);
	reiniciar_tableros(jugador2);
	ubicar_barcos(jugador1);
	getchar();
	system("clear");
	ubicar_barcos(jugador2);
	getchar();
	system("clear");
	cout<<"Vamos a empezar a jugar"<<endl;
	while(!hay_ganador){
		cout<<"Es tu turno "<<jugador1->nombre<<endl;
		hay_ganador=dispara(jugador1,jugador2);
		if(!hay_ganador){
			cout<<"Es tu turno "<<jugador2->nombre<<endl;
			hay_ganador=dispara(jugador2,jugador1);
		}
	}
}

void ubicar_barcos(Jugador *jugador) {
	cout << "Hola " << jugador->nombre << " es hora de ubicar los barcos"
			<< endl;
	cout << "Empecemos con PortaAviones [5]: "<<endl;
	imprimir_tablero(jugador->tablero_barcos);
	ubicar_barco(jugador,5,1);
	system("clear");
	cout << "Continuemos con Fragata [4]: "<<endl;
	imprimir_tablero(jugador->tablero_barcos);
	ubicar_barco(jugador,4,2);
	system("clear");
	cout << "Continuemos con Crucero[3]: "<<endl;
	imprimir_tablero(jugador->tablero_barcos);
	ubicar_barco(jugador,3,3);
	system("clear");
	cout << "Continuemos con Submarino[3]: "<<endl;
	imprimir_tablero(jugador->tablero_barcos);
	ubicar_barco(jugador,3,4);
	system("clear");
	cout << "Y finalmente Destrcutor[2]: "<<endl;
	imprimir_tablero(jugador->tablero_barcos);
	ubicar_barco(jugador,2,5);
	system("clear");
	cout<<"Este es el tablero final"<<endl;
	imprimir_tablero(jugador->tablero_barcos);

}

int menu_direccion() {
	int direccion;

	cout << "Elige hacia qué posición se dirije el bote:" << endl;
	cout << "las opciones son: " << endl;
	cout << "1. arriba " << endl;
	cout << "2. abajo " << endl;
	cout << "3. derecha " << endl;
	cout << "4. izquierda " << endl;
	cin >> direccion;

	return direccion;
}

void ubicar_barco(Jugador *jugador, int tamanio,int opc) {
	string barco[tamanio];
	char fila = '0';
	int columna = 0;
	int opcion = 0;
	int contador=0;
	bool bandera = true;
	do {
		bandera=true;
		cout << "digite la posicion de inicio: " << endl;
		cout << "fila:";
		cin >> fila;
		cout << "columna:";
		cin >> columna;
		opcion = menu_direccion();

		switch (opcion) {
		case 1: //arriba
			if (fila-'A'+1 < tamanio) {
				bandera = false;
			} else {
				for (int j = fila - 'A'+1; j > fila-'A'+1-tamanio; j--) {
					if (jugador->tablero_barcos[j][columna] == 'b') {
						bandera = false;
					} else {
						jugador->tablero_barcos[j][columna] = 'b';
						barco[contador]=to_string(j);
						barco[contador]+=to_string(columna);
						cout<<barco[contador];
						contador++;
					}
				}
			}
			break;

		case 2: //abajo
			if (fila -'A'> 10-tamanio ) {
				bandera = false;
			} else {
				for (int j = fila - 'A'+1; j < fila-'A'+1+tamanio; j++) {
					if (jugador->tablero_barcos[j][columna] == 'b') {
						bandera = false;
					} else {
						jugador->tablero_barcos[j][columna] = 'b';
						barco[contador]=to_string(j);
						barco[contador]+=to_string(columna);
						cout<<barco[contador];
						contador++;
					}
				}
			}
			break;

		case 3: //derecha
			if (columna > 10 - tamanio + 1) {
				bandera = false;
			} else {
				for (int j = columna; j < columna + tamanio; j++) {
					if (jugador->tablero_barcos[fila - 'A' + 1][j] == 'b') {
						bandera = false;
					} else {
						jugador->tablero_barcos[fila - 'A' + 1][j] = 'b';
						barco[contador]=to_string(fila-'A'+1);
						barco[contador]+=to_string(j);
						cout<<barco[contador]<<" ";
						contador++;
					}
				}
			}
			break;

		case 4: //izquierda
			if (columna < tamanio) {
				bandera = false;
			} else {
				for (int j = columna; j > columna - tamanio; j--) {
					if (jugador->tablero_barcos[fila - 'A' + 1][j] == 'b') {
						bandera = false;
					} else {
						jugador->tablero_barcos[fila - 'A' + 1][j] = 'b';
						barco[contador]=to_string((fila-'A'+1));
						barco[contador]+=to_string(j);
						cout<<barco[contador];
						contador++;
					}
				}
			}
			break;
		}
		if (bandera == false) {
			cout << "no es posible ubicar el barco, elija otra posición"
					<< endl;

		}
	} while (bandera == false);


	switch (opc){
	case 1:
		for(int i=0;i<5;i++){
			jugador->porta_aviones[i]=barco[i];
		}
		break;
	case 2:
		for(int i=0;i<4;i++){
			jugador->fragata[i]=barco[i];
		}
		break;
	case 3:
		for(int i=0;i<3;i++){
			jugador->crucero[i]=barco[i];
		}
		break;
	case 4:
		for(int i=0;i<3;i++){
			jugador->submarino[i]=barco[i];
		}
		break;
	case 5:
		for(int i=0;i<2;i++){
			jugador->destructor[i]=barco[i];
		}
		break;

	}

}

bool dispara(Jugador *jugador1, Jugador *jugador2){
	char fila;
	int columna=0,int_fila=0, barco=0;
	cout<<"¿A qué posición desea disparar?"<<endl;
	imprimir_tablero(jugador1->tablero_disparos);
	cout<<"Fila: ";
	cin>>fila;
	int_fila=fila-'A'+1;
	cout<<"Columna: ";
	cin>>columna;
	string coordenada;
	coordenada = to_string(int_fila);
	coordenada= coordenada+to_string(columna);
	cout<<coordenada;

	if(jugador2->tablero_barcos[int_fila][columna]=='b'){
		cout<<"¡Impacto! ¡Sigue así!";
		jugador1->tablero_disparos[int_fila][columna]='X';
		jugador2->tablero_barcos[int_fila][columna]='X';
		barco=buscar_barco(jugador2,coordenada);//se identifica el barco con un entero
		if(hundido(jugador2,barco)){
			cout<<" ¡¡Lo has hundido!!"<<endl;
		}else{
			cout<<endl;
		}



	}else{
		cout<<jugador1->nombre<<"has fallado, apunta mejor!"<<endl;
		jugador1->tablero_disparos[int_fila][columna]='O';
		jugador2->tablero_barcos[int_fila][columna]='O';
	}

	if(buscar_sobrevivientes(jugador2)==false){
		escribirArchivo(jugador1,jugador2);
		return true;
	}
	return false;
	system ("clear");
}

bool buscar_sobrevivientes(Jugador *jugador){
	for(int i=1;i<11;i++){
		for(int j=1;j<11;j++){
			if(jugador->tablero_barcos[i][j]=='b'){
				return true;
			}
		}
	}
	return false;
}

int buscar_barco(Jugador *jugador,string coordenada){
	for(int i=0;i<5;i++){
		if(jugador->porta_aviones[i].compare(coordenada)==0){
			jugador->porta_aviones[i]="X";
			return 1;
		}
		if(jugador->fragata[i].compare(coordenada)==0){
			jugador->fragata[i]="X";
			return 2;
		}
		if(jugador->crucero[i].compare(coordenada)==0){
			jugador->crucero[i]="X";
			return 3;
		}
		if(jugador->submarino[i].compare(coordenada)==0){
			jugador->submarino[i]="X";
			return 4;
		}
		if(jugador->destructor[i].compare(coordenada)==0){
			jugador->destructor[i]="X";
			return 5;
		}
	}
	return 0;
}

bool hundido(Jugador *jugador,int opc){
	switch(opc){
	case 1:
		for(int i=0;i<5;i++){
			if(jugador->porta_aviones[i]!= "X"){
				return false;
			}
		}
		break;
	case 2:
		for(int i=0;i<4;i++){
			if(jugador->fragata[i]!= "X"){
				return false;
			}
		}
		break;
	case 3:
		for(int i=0;i<3;i++){
			if(jugador->crucero[i]!= "X"){
				return false;
			}
		}
		break;
	case 4:
		for(int i=0;i<3;i++){
			if(jugador->submarino[i]!= "X"){
				return false;
			}
		}
		break;
	case 5:
		for(int i=0;i<2;i++){
			if(jugador->destructor[i]!= "X"){
				return false;
			}
		}
		break;
	}
	return true;
}

bool iniciarPrograma(Jugador *jugador1, Jugador *jugador2)
{
    // Create a text string, which is used to output the text file
    string myText;
    int contador = 0;
    char *ptr; // declare a ptr pointer
    bool respuesta = false;
    string nombreJugador[2];

    // Read from the text file
    ifstream MyReadFile(FILENAME);

    // Use a while loop together with the getline() function to read the file line by line
    while (getline (MyReadFile, myText) && contador < 2) {
        // Output the text from the file
        ptr = strtok(&myText[0], ","); // use strtok() function to separate string using comma (,) delimiter.
        // check ptr is not null
        if (ptr != NULL)
        {
            cout << ptr  << endl; // print the string token
            nombreJugador[contador] = ptr;
            // ptr = strtok (NULL, " , ");
            // cantidadCampos++;
        }
        contador++;
    }

    // Close the file
    MyReadFile.close();

    if(contador == 2)
    {
        jugador1->nombre = nombreJugador[0];
        jugador2->nombre = nombreJugador[1];
        respuesta = true;
    }else
    {
        respuesta = false;
    }
    return respuesta;
}


void escribirArchivo(Jugador *ganador, Jugador *perdedor)
{
    string valores[3];
    string myText;
    int contador = 0;
    char *ptr; // declare a ptr pointer
    int cantidadCampos = 0;
    int triunfos;
    int derrotas;
    bool encontroGanador = false;
    bool encontroPerdedor = false;
    char *buffer;

	/*	Deletes the file if exists */
	if (rename(&FILENAME[0], &(FILENAME+".tmp")[0]) != 0)
    {
        ofstream MyFile(FILENAME);
        MyFile << perdedor->nombre << ",0,1"<<endl;
        MyFile << ganador->nombre << ",1,0"<<endl;
        MyFile.close();
    }
	else
    {
        // Read from the text file
        ifstream MyReadFile(FILENAME+".tmp");
        // Create and open a text file
        ofstream MyFile(FILENAME);

        // Use a while loop together with the getline() function to read the file line by line
        while (getline (MyReadFile, myText)) {
            cantidadCampos = 0;
            // Output the text from the file
            ptr = strtok(&myText[0], ","); // use strtok() function to separate string using comma (,) delimiter.
            // check ptr is not null
            while (ptr != NULL && cantidadCampos < 3)
            {
                valores[cantidadCampos] = ptr;
                ptr = strtok (NULL, ",");
                cantidadCampos++;
            }
            // Write to the file
            if(cantidadCampos == 3)
            {
                if(valores[0] == ganador->nombre)
                {
                    buffer = &(valores[1])[0];
                    triunfos = atoi(buffer);
                    valores[1] = to_string(triunfos+1);
                    encontroGanador = true;
                }
                if(valores[0] == perdedor->nombre)
                {
                    buffer = &(valores[2])[0];
                    derrotas = atoi(buffer);
                    valores[2] = to_string(derrotas+1);
                    encontroPerdedor = true;
                }
                MyFile << valores[0] << ","<< valores[1] << ","<< valores[2]<<endl;
            }
            else
            {
                cout << "Linea descartada: " << myText;
            }
            contador++;
        }
        if(!encontroPerdedor)
        {
            MyFile << perdedor->nombre << ",0,1"<<endl;
        }
        if(!encontroGanador)
        {
            MyFile << ganador->nombre << ",1,0"<<endl;
        }

        // Close the files
        MyReadFile.close();
        MyFile.close();
    }
}

