const request = require('supertest');
const express = require('express')
 
const url = 'http://localhost:3000';
constv1ExpectedObj={
    "statusCode": 200,
    "data": {
        "firstName": "Andrew0000",
        "lastName": "Jack0000",
        "clientId": "9856555"
    }
}
constv2ExpectedObj={
    "statusCode": 200,
    "data": {
        "firstName": "Andrew",
        "lastName": "Jack",
        "clientId": "985-6555"
    }
}
 
test('Should parse v1 data', async () => {
     const response =   await request(url)
    .post('/api/v1/parse')
     
    .send({
        data: 'Andrew0000Jack00009856555'
    })
    .expect(response => {
        expect(response.status).toBe(200)
        expect(response.body).toMatchObject(constv1ExpectedObj)
         
      })
    })


    test('Should parse v2 data', async () => {
        const response =   await request(url)
       .post('/api/v2/parse')
        
       .send({
           data: 'Andrew0000Jack00009856555'
       })
       .expect(response => {
           expect(response.status).toBe(200)
           expect(response.body).toMatchObject(constv2ExpectedObj)
            
         })
       })
   

