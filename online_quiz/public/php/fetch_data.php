<?php

// Allow requests from any origin to access the data returned by PHP script
header('Access-Control-Allow-Origin: *');



// Define parameters of database
define('DB_HOST', 'localhost');
define('DB_USER', 'gigachad');
define('DB_PASS', '123456');
define('DB_NAME', 'joemama');


// Connect to the database
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
if ($conn->connect_errno) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to connect to database']);
    exit;
}

// Fetch data from database based on table name
$table = $_GET['tableName'];
$query = "SELECT * FROM $table";


// Execute the SQL query and fetch the results as an array of associative arrays
$result = $conn->query($query);

if (!$result) {
    http_response_code(500);
    echo json_encode(['error' => 'Invalid table']);
    exit;
}

$data = [];

while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

// Close the database connection
$conn->close();


// Return the data as JSON
header('Content-Type: application/json');
echo json_encode($data);
