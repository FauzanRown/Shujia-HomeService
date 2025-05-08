#include<iostream>
using namespace  std;

class DataKTP {
	public :
		string nik, nama, tempat_lahir, tanggal_lahir, alamat, agama, status_perkawinan, pekerjaan;
		char kelamin;
		
        void inputdata(){
            cout << "===============================" << endl;
            cout << "         INPUT DATA KTP        " << endl;
            cout << "===============================" << endl;
            cout << "Masukkan NIK                 : " << nik.dataindividu << endl;
            cout << "Masukkan Nama                : " << nama.dataindividu << endl;
            cout << "Masukkan Tempat Lahir        : " << tempat_lahir.dataindividu << endl;
            cout << "Masukkan Tanggal Lahir (DD-MM-YYYY): " << tanggal_lahir.dataindividu << endl;
            cout << "Masukkan Jenis Kelamin (L/P) : " << kelamin.dataindividu << endl;
            cout << "Masukkan Alamat              : " << alamat.dataindividu << endl;
            cout << "Masukkan Agama               : " << agama.dataindividu << endl;
            cout << "Masukkan Status Perkawinan   : " << status_perkawinan.dataindividu << endl;
            cout << "Masukkan Pekerjaan           : " << pekerjaan.dataindividu << endl;		
        }
        
        void tampilkandata(){	
        	cout << "===============================" << endl;
           cout << "            DATA KTP          " << endl;
           cout << "===============================" << endl;
           cout << "NIK                : " << nik << endl;
           cout << "Nama               : " << nama << endl;
           cout << "Tempat, Tgl Lahir  : " << tempat_lahir << ", " << tanggal_lahir << endl;
           cout << "Jenis Kelamin      : " << jenis_kelamin << endl;
           cout << "Alamat             : " << alamat << endl;
           cout << "Agama              : " << agama << endl;
           cout << "Status Perkawinan  : " << status_perkawinan << endl;
           cout << "Pekerjaan          : " << pekerjaan << endl;
           cout << "===============================" << endl;	
        
        }
	
};




int main(){
	
	DataKTP dataindividu;
	
	inputdata();

    

	
	return 0;
}