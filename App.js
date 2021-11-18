import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TouchableHighlight,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { useState } from "react";
import {
  Button,
  Form,
  Row,
  Col,
  Label,
  InputGroup,
  FormControl,
  Input,
  Carousel,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/1.jpg")} style={styles.img}>
        <Text style={styles.StartText}>
          Patient Consultation Scheduler System
        </Text>
      </ImageBackground>
      <TouchableHighlight
        style={styles.Btn}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.textBtn}>GET STARTED</Text>
      </TouchableHighlight>
    </View>
  );
}

// LOGIN SCREEN
function Profile({ navigation }) {
  return (
    <ImageBackground source={require("./assets/3.jpg")} style={styles.img}>
      <View style={styles.formPage}>
        <Form>
          <Text style={styles.txtLabel}>LOG IN</Text>
          <Row className="align-items-center">
            <Col sm={3} className="my-1">
              <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
                Username
              </Form.Label>
              <FormControl
                id="inlineFormInputGroupUsername"
                placeholder="Username"
              />
            </Col>
            <Col sm={3} className="my-1">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Col>
            <Col
              xs="auto"
              className="my-1"
              style={{
                flexDirection: "row",
                margin: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
              sm={5}
            >
              <Button
                value="login"
                variant="primary"
                onClick={() => navigation.navigate("Register")}
              >
                Login
              </Button>
              <div className="vr" />
              <Button
                value="register"
                variant="secondary"
                onClick={() => navigation.navigate("Register")}
              >
                Register
              </Button>
            </Col>
          </Row>
        </Form>
      </View>
    </ImageBackground>
  );
}

// REGISTER
function Register({ navigation }) {
  return (
    <ScrollView //Container Set
      style={{ flex: 1, backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={require("./assets/6.jpg")}
        style={{ height: 200 }}
      >
        <View style={styles.brandView}></View>
      </ImageBackground>
      {/* //Bottom view */}
      <View style={styles.bottomView}>
        {/* WelcomeView */}
        <View style={{ padding: 40 }}>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridfname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridlname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="dob">
                <Form.Label>Birthdate</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="juandc@example.com" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="8 Characters Password"
                  aria-describedby="passwordHelpBlock"
                />
                <Form.Text id="passwordHelpBlock" muted>
                  Your password must be 8-20 characters long, contain letters
                  and numbers, and must not contain spaces, special characters,
                  or emoji.
                </Form.Text>
              </Form.Group>
              <Row className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Control type="number" placeholder="ex. 09457135812" />
                </Form.Group>
              </Row>
            </Row>
            <Row className="mb-3">
              <Button
                variant="primary"
                type="submit"
                style={{ margin: 5, padding: 1 }}
                onClick={() => navigation.navigate("Consultation")}
              >
                Register
              </Button>
              <Button
                variant="outline-secondary"
                type="clear"
                style={{ margin: 5, padding: 1 }}
              >
                Clear
              </Button>
            </Row>
          </Form>
        </View>
      </View>
    </ScrollView>
  );
}

// SET CONSULTATION
function Consultation({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ImageBackground
        source={require("./assets/5.jpg")}
        style={{ height: 100 }}
        >
          <Form>
          </Form>
       </ImageBackground>
    </View>
  );
}

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Umbrella Corp"
        component={StartScreen}
        options={{
          headerShown: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="Register"
        options={{
          headerShown: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
        component={Register}
      />
      <Stack.Screen
        name="Consultation"
        component={Consultation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  brandView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomView: {
    flex: 1.5,
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    backgroundColor: "white",
  },
  submitBtn: {},
  img: {
    flex: 1,
    justifyContent: "center",
  },
  StartText: {
    fontStyle: "normal",
    fontSize: 50,
    fontWeight: "bold",
    alignItems: "center",
    writingDirection: "ltr",
    padding: 10,
    backgroundColor: "#000000c5",
    color: "white",
  },
  Btn: {
    alignSelf: "auto",
    alignItems: "center",
    padding: 15,
    height: 50,
    backgroundColor: "#386dff",
  },
  textBtn: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  txtLabel: {
    fontSize: 24,
    fontStyle: "normal",
    fontFamily: "Roboto",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  formPage: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    padding: 15,
    margin: 10,
    flex: 2,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
