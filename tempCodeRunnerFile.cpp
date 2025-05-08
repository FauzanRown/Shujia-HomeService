#include <iostream>
using namespace std;

string pelanggan, jenis_bensin;
int pilihan, jumlah_liter;

int totalHarga(){
	if(pilihan == 1){
		int pertamax = (9000 * jumlah_liter);
	} else if (pilihan == 2){
		int pertalite = (7000 * jumlah_liter);
	}
}

void inputpelanggan(){
    cout << "======================================" << endl;
    cout << "||==         SPBU  KERANG        ==||" << endl;
    cout << "======================================" << endl;
    
    cout << "Masukan Nama Pelanggan : " ;
    getline(cin,pelanggan);
    
    cout << "Pilihan Jenis Bensin : " << endl;
    cout << "1. Pertalite " << endl;
    cout << "2. Pertamax" << endl;
    cout << "Pilihan Anda (1/2) : " ;
    cin >> pilihan;
    
    cout << endl;
    
    cout << "Masukan Jumlah Liter : ";
    cin >> jumlah_liter;
    
    switch(pilihan){
    	case 1 :
    		jenis_bensin = "Pertalite";
    		totalHarga();
    		break;
    	
    	case 2 :
    		jenis_bensin = "Pertamax";
    		totalHarga();
    		break;
    	
    	default :
    		cout << "Pilihan Tidak Sesuai";			
	}  
}

void strukpembayaran(){
	cout << "======================================" << endl;
    cout << "||==         SPBU  KERANG        ==||" << endl;
    cout << "======================================" << endl;
    cout << "Nama Pelanggan : " << pelanggan << endl;
    cout << "Jenis Bensin	: " << jenis_bensin << endl;
    cout << "Jumlah Liter	: " << jumlah_liter << "L" << endl;
    cout << "Total Harga	: " << totalHarga();
}


int main(){
	
	inputpelanggan();
	strukpembayaran();

    return 0;
}