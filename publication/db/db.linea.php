<?php
/*
* Table Definition for Ingrediente - Colombina
*/


class DataObjects_Linea extends DB_DataObject {

    // you can define these yourself
    
    var $__table='linea';                       // table name
    var $id;                              // int primary_key
    var $nombre;                              // string
    var $productoColombina;                              // string
    var $fecha;                              // date
    
    // these are usefull to be consistant with a autogenerated file.
    
    function staticGet($k,$v=NULL) { return DB_DataObject::staticGet('DataObjects_Linea',$k,$v); }

  
    // now define your table structure.
    // key is column name, value is type
    function table() {
        return array(
            'id'     => DB_DATAOBJECT_INT,
            'nombre'   => DB_DATAOBJECT_STR,
        );
    }
    
    // now define the keys.
    function keys() {
        return array('id');
    }  
}





?>