import { ContainerToday, Title, ListToday } from './styles';
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { UserDataContext } from '../../Context/userData';
import { HABITS_URL } from '../../constants/urls';
import { PageWithLoading } from '../../components/PageWithLoading/PageWithLoading';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BoardToday from '../../components/BoardToday/BoardToday';
import axios from 'axios';
import dayjs from 'dayjs';

