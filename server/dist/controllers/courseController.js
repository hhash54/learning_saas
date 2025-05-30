"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCourse = exports.listCourses = void 0;
const courseModel_1 = __importDefault(require("../models/courseModel"));
const uuid_1 = require("uuid");
const listCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category } = req.query;
    try {
        const courses = category && category !== "all"
            ? yield courseModel_1.default.scan("category").eq(category).exec()
            : yield courseModel_1.default.scan().exec();
        res.json({ message: "Courses retrieved successfully", data: courses });
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving courses", error });
    }
});
exports.listCourses = listCourses;
const getCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseId } = req.params;
    try {
        const course = yield courseModel_1.default.get(courseId);
        if (!course) {
            res.status(404).json({ message: "Course not found" });
            return;
        }
        export const createCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const { teacherId, teacherName } = req.body;
                if (!teacherId || !teacherName) {
                    res.status(400).json({ message: "Teacher Id and name are required" });
                    return;
                }
                const newCourse = new courseModel_1.default({
                    courseId: (0, uuid_1.v4)(),
                    teacherId,
                    teacherName,
                    title: "Untitled Course",
                    description: "",
                    category: "Uncategorized",
                    image: "",
                    price: 0,
                    level: "Beginner",
                    status: "Draft",
                    sections: [],
                    enrollments: [],
                });
                yield newCourse.save();
                res.json({ message: "Course created successfully", data: newCourse });
            }
            catch (error) {
                res.status(500).json({ message: "Error creating course", error });
            }
        });
        res.json({ message: "Courses retrieved successfully", data: course });
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving course", error });
    }
});
exports.getCourse = getCourse;
