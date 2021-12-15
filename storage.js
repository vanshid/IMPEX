' use strict ';
 
const CustomerMgr = require('dw/customer/CustomerMgr');
const FileWriter = require('dw/io/FileWriter');
const File = require('dw/io/File');
const Path = File.IMPEX + ' /src/newDirectory';

function createFile () {
  
   
    let directory = new File(Path);

    if(!directory.exists()) {
        directory.mkdirs();
    }

}

function generatingXML () {

    let XMLStreamWriter = require('dw/io/XMLStreamWriter');
    let xsw = new XMLStreamWriter();
    let customers = CustomerMgr.searchProfile('','creationDate desc', '');
    let customerArray = [ ];

    while(customers.hasNext()) {

        let fetchCustomer = customers.next();
        let findCustomer = fetchCustomer.customer.customerGroups;

        if(group.ID === "Registered")
        {
            return group;
        }

    }

    xsw.writeStartElement('emails');
    xsw.writeCharacters('Customers those are registered');
    let counter = 0;
    xsw.writeStartElement('emails');
    xsw.writeCharacters('Customers those are registered');
    customerArray.forEach(element => {
        xsw.writeStartElement(counter);
        xsw.writeCharacters(element.email);
        xsw.writeEndElement();
        counter ++;
        
    });

    xsw.writeEndDocument();
    xsw.close();

}

exports.execute = {
    fileCreation 
}