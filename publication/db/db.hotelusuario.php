<?php
/*
* Table Definition for Ingrediente - Colombina
*/


class DataObjects_HotelUsuario extends DB_DataObject {

    // you can define these yourself
    
    var $__table='bmw_hotelusuario';                       // table name
    var $idhotelUsuario;                              // int primary_key
    var $idUsuario;                               // int
    var $destino;                              // string
    var $hotel;                              // string
    
    // these are usefull to be consistant with a autogenerated file.
    
    function staticGet($k,$v=NULL) { return DB_DataObject::staticGet('DataObjects_HotelUsuario',$k,$v); }

  
    // now define your table structure.
    // key is column name, value is type
    function table() {
        return array(
            'idhotelUsuario'     => DB_DATAOBJECT_INT,
            'idUsuario'     => DB_DATAOBJECT_INT,
            'destino'   => DB_DATAOBJECT_STR,
            'hotel'   => DB_DATAOBJECT_STR,
        );
    }
    
    // now define the keys.
    function keys() {
        return array('idhotelUsuario');
    }  
}





?>